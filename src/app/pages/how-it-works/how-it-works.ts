import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  title: string;
  description: string;
  image: string;
  gradient: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.html'
})
export class HowItWorks {
  public steps: Step[] = [
    {
      title: 'Discover Your Destination',
      description: 'Browse our curated collection of destinations, read travel guides, and find the perfect spot for your next adventure. Filter by interests, budget, or travel style.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      gradient: 'from-(--primary-color) to-(--primary-color)'
    },
    {
      title: 'Customize Your Trip',
      description: 'Select your dates, choose accommodation styles, add activities, and tailor every detail. Our smart system suggests the best options based on your preferences.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
      gradient: 'from-(--primary-color) to-(--primary-color)'
    },
    {
      title: 'Book with Confidence',
      description: 'Secure your trip with our flexible booking options. Pay securely online with multiple payment methods. Get instant confirmation and travel documents.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      gradient: 'from-(--primary-color) to-(--primary-color)'
    },
    {
      title: 'Travel and Enjoy',
      description: 'Embark on your journey with 24/7 support. Our local partners ensure smooth experiences, and our app keeps all your travel info at your fingertips.',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop',
      gradient: 'from-(--primary-color) to-(--primary-color)'
    }
  ];
}
