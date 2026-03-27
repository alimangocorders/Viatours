import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

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

  // Single constructor for all dependencies
  constructor(
    private cdr: ChangeDetectorRef,
    public chatService: ChatService
  ) {}

  async sendNewsletter() {
    if (!this.newsletterEmail || !this.newsletterEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    this.isSubmitting = true;

    const payload = {
      access_key: "a04d6c58-42c3-46c5-9cb5-a8dea84b55f3",
      subject: "New Newsletter Subscription",
      from_name: "Viatours Website",
      email: this.newsletterEmail,
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

        setTimeout(() => {
          this.showSuccess = false;
          this.cdr.detectChanges();
        }, 5000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Newsletter Error:', error);
      alert('Subscription failed. Please try again later.');
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }
}
