import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html',
})
export class Booking implements OnInit {
  currentStep = 1;
  selectedTour: any = null;

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

  constructor(private router: Router) {
    // 1. Retrieve the trip object passed via router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedTour = navigation.extras.state['selectedTrip'];
    }
  }

  ngOnInit() {
    // 2. Safety check: If someone goes to /booking directly, redirect back
    if (!this.selectedTour) {
      this.router.navigate(['/']);
    }
  }

  get totalAmount() {
    return (this.selectedTour?.price || 0) * this.bookingData.travelers;
  }

  nextStep() {
    if (this.currentStep < 5) {
      this.currentStep++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  generateConfCode() {
    return 'MNGO-' + Math.random().toString(36).substring(7).toUpperCase();
  }
}
