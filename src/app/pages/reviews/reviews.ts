import { Component } from '@angular/core';

interface Review {
  name: string;
  location: string;
  date: string;
  rating: number;
  image: string;
  comment: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.html',
})
export class Reviews {
  public ratingSummary = [
    { stars: 5, percentage: 89 },
    { stars: 4, percentage: 8 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ];

  public reviews: Review[] = [
    {
      name: 'Sarah Mitchell',
      location: 'Paris Trip',
      date: 'March 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop',
      comment: '"Absolutely magical experience! The Eiffel Tower at sunset was breathtaking. Tourz handled everything perfectly - from flights to local guides."',
    },
    {
      name: 'James Chen',
      location: 'Tokyo Trip',
      date: 'February 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop',
      comment: '"Tokyo exceeded all expectations! The blend of ancient temples and neon-lit streets was incredible. Our guide knew all the hidden gems."',
    },
    {
      name: 'Emma Wilson',
      location: 'Bali Trip',
      date: 'January 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop',
      comment: '"Bali was a dream come true! From rice terraces to beach clubs, every moment was perfect. The wellness retreat they recommended changed my life."',
    }
  ];
}
