import { Component, OnInit, ChangeDetectorRef, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';
// Import your custom calendar component
import { CustomCalendarComponent } from '../../components/custom-calendar/custom-calendar';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CustomCalendarComponent],
  templateUrl: './booking.html',
})
export class Booking implements OnInit {
  currentStep = 1;
  selectedTour: any = null;
  isSubmitting = false;
  confirmationCode = '';

  // UI State for custom calendar
  isCalendarOpen = false;

  bookingData = {
    startDate: '',
    travelers: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  };

  steps = [
    { number: 1, title: "Tour Details" },
    { number: 2, title: "Travel Dates" },
    { number: 3, title: "Personal Info" },
    { number: 4, title: "Payment" },
    { number: 5, title: "Confirmation" },
  ];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private eRef: ElementRef // Added for click-outside detection
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedTour = navigation.extras.state['selectedTrip'];
    }
  }

  /**
   * Closes the custom calendar when clicking outside the component
   */
  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isCalendarOpen = false;
    }
  }

  ngOnInit() {
    if (!this.selectedTour) {
      this.router.navigate(['/']);
    }
    this.confirmationCode = this.generateConfCode();
  }

  /**
   * Handles the date selected from your CustomCalendarComponent
   */
  onDatePicked(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    // Set formatted date to bookingData
    this.bookingData.startDate = `${year}-${month}-${day}`;

    // Close dropdown
    setTimeout(() => {
      this.isCalendarOpen = false;
    }, 200);
  }

  get totalAmount() {
    return (this.selectedTour?.price || 0) * this.bookingData.travelers;
  }

  // --- Strict Formatting Helpers ---

  formatCardNumber(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.substring(0, 16);
    this.bookingData.cardNumber = value;
  }

  formatExpiry(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    // Limit to exactly 4 digits total (MMYY)
    if (value.length > 4) value = value.substring(0, 4);

    if (value.length >= 3) {
      this.bookingData.expiry = value.substring(0, 2) + '/' + value.substring(2);
    } else {
      this.bookingData.expiry = value;
    }
  }

  formatCVV(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.substring(0, 4);
    this.bookingData.cvv = value;
  }

  async nextStep() {
    if (this.currentStep === 4) {
      await this.handleFinalBooking();
    } else if (this.currentStep < 5) {
      this.currentStep++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  async handleFinalBooking() {
    this.isSubmitting = true;
    this.cdr.detectChanges(); // Ensure button shows "Processing..."

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    // UPDATED: Parameters now match your EmailJS screenshot exactly
    const customerParams = {
      to_email: this.bookingData.email,
      user_name: this.bookingData.firstName,
      tour_title: this.selectedTour?.title,
      conf_code: this.confirmationCode,
      start_date: this.bookingData.startDate,
      traveler_count: this.bookingData.travelers, // Matches {{traveler_count}} in EmailJS
      total_amount: formatter.format(this.totalAmount)
    };

    const ownerParams = {
      admin_name: "Ali Farooq",
      customer_full_name: `${this.bookingData.firstName} ${this.bookingData.lastName}`,
      customer_email: this.bookingData.email,
      customer_phone: this.bookingData.phone,
      tour_title: this.selectedTour?.title,
      booking_date: this.bookingData.startDate,
      code: this.confirmationCode,
      total_price: formatter.format(this.totalAmount)
    };

    try {
      await Promise.all([
        emailjs.send('service_zjotlor', 'template_r7pzxl8', customerParams, 'HIwtp1miJk5YWZhyc'),
        emailjs.send('service_zjotlor', 'template_x2r0kkv', ownerParams, 'HIwtp1miJk5YWZhyc')
      ]);
      this.currentStep = 5;
    } catch (error) {
      console.error("Email failed:", error);
      // Move to success anyway to not block user, but alert them
      this.currentStep = 5;
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }

  prevStep() {
    if (this.currentStep > 1 && this.currentStep < 5) {
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  generateConfCode() {
    return 'MNGO-' + Math.random().toString(36).substring(7).toUpperCase();
  }
}
