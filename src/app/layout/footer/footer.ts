import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  newsletterEmail: string = '';
  isSubmitting: boolean = false;
  showSuccess: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

async sendNewsletter() {
  if (!this.newsletterEmail || !this.newsletterEmail.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  this.isSubmitting = true;

  // Web3Forms Payload for Newsletter
  const payload = {
    access_key: "5a46e4ac-581e-46c8-95b2-4fdc4e67bc28",
    subject: "New Newsletter Subscription",
    from_name: "Viatours Website",
    email: this.newsletterEmail, // This shows as the sender in your inbox
    message: `A new user has subscribed to the newsletter: ${this.newsletterEmail}`,
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
      this.showSuccess = true;
      this.newsletterEmail = '';
      this.cdr.detectChanges();

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess = false;
        this.cdr.detectChanges();
      }, 5000);
    } else {
      throw new Error(result.message);
    }

  } catch (error) {
    console.error('Newsletter Subscription Error:', error);
    alert('Subscription failed. Please try again later.');
  } finally {
    this.isSubmitting = false;
    this.cdr.detectChanges();
  }
}
}
