import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  submitted = false;
  isSubmitting = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private cdr: ChangeDetectorRef) {}

  async onSubmit(contactForm: NgForm) {
    // Prevent submission if the Angular validation rules are not met
    if (contactForm.invalid) {
      contactForm.control.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    // Payload formatted for Web3Forms automatic table generation
    const payload = {
      access_key: "5a46e4ac-581e-46c8-95b2-4fdc4e67bc28",
      subject: `New Inquiry: ${this.formData.subject}`,
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
      from_name: "Viatours Contact System"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        this.submitted = true;

        // Reset the form data and the validation 'touched' states
        contactForm.resetForm();
        this.formData = { name: '', email: '', subject: '', message: '' };

        this.cdr.detectChanges();

        // Hide the success alert after 5 seconds
        setTimeout(() => {
          this.submitted = false;
          this.cdr.detectChanges();
        }, 5000);
      } else {
        throw new Error(result.message);
      }

    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to send message. Please check your connection and try again.');
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }

  contactMethods = [
    {
      icon: 'ri-phone-line',
      title: "Call Us",
      description: "Mon–Fri from 8am to 6pm",
      value: "+1 (555) 000-0000",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: 'ri-mail-line',
      title: "Email Us",
      description: "We'll reply within 24 hours",
      value: "hello@viatours.com",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: 'ri-map-pin-line',
      title: "Visit Us",
      description: "Come say hello",
      value: "100 Smith Street, Melbourne",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: 'ri-time-line',
      title: "Working Hours",
      description: "We're available",
      value: "Mon – Fri: 9am – 7pm",
      color: "bg-orange-100 text-orange-600",
    }
  ];

  faqs = [
    { q: "How do I book a tour?", a: "Simply browse our tours page, select your trip, and complete the booking form." },
    { q: "What is your cancellation policy?", a: "Free cancellation up to 48 hours before the tour starts." },
    { q: "Do you offer group discounts?", a: "Yes! Groups of 6 or more receive a 15% discount." }
  ];
}
