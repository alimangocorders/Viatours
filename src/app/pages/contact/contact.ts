

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  submitted = false;
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactMethods = [
    {
      icon: 'ri-phone-line',
      title: "Call Us",
      description: "Mon–Fri from 8am to 6pm",
      value: "+1 (555) 000-0000",
      color: "bg-orange-100 text-(--primary-color)",
    },
    {
      icon: 'ri-mail-line',
      title: "Email Us",
      description: "We'll reply within 24 hours",
      value: "hello@viatours.com",
      color: "bg-orange-100 text-(--primary-color)",
    },
    {
      icon: 'ri-map-pin-line',
      title: "Visit Us",
      description: "Come say hello",
      value: "100 Smith Street, Melbourne",
      color: "bg-orange-100 text-(--primary-color)",
    },
    {
      icon: 'ri-time-line',
      title: "Working Hours",
      description: "We're available",
      value: "Mon – Fri: 9am – 7pm",
      color: "bg-orange-100 text-(--primary-color)",
    }
  ];

  faqs = [
    { q: "How do I book a tour?", a: "Simply browse our tours page, select your trip, and complete the booking form." },
    { q: "What is your cancellation policy?", a: "Free cancellation up to 48 hours before the tour starts." },
    { q: "Do you offer group discounts?", a: "Yes! Groups of 6 or more receive a 15% discount." }
  ];

  onSubmit() {
    this.submitted = true;
    console.log('Form Data:', this.formData);

    setTimeout(() => {
      this.submitted = false;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 300,0);
  }
}
