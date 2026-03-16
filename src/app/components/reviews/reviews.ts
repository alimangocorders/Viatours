import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
  // Track which review is active (0 = first person)
  activeIndex: number = 0;

  customerReviews = [
    {
      name: 'Ali Tufan',
      role: 'Product Manager, Apple Inc.',
      text: 'The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers.',
      image: 'client-1.png'
    },
    {
      name: 'Jane Doe',
      role: 'Designer, Google',
      text: 'An incredible experience from start to finish. The booking process was seamless, and the tour guide was exceptionally knowledgeable.',
      image: 'client-2.png'
    },
    {
      name: 'John Smith',
      role: 'CEO, Startup Co',
      text: 'I’ve traveled with many agencies, but this one stands out for their attention to detail and high-end destinations. Highly recommended!',
      image: 'client-3.png'
    },
    {
      name: 'Sarah Connor',
      role: 'Engineer, Tesla',
      text: 'Great value for money. The local escapes they offer are hidden gems that you wouldn’t find anywhere else.',
      image: 'client-4.png'
    },
    {
      name: 'Mike Ross',
      role: 'Lawyer, Pearson Hardman',
      text: 'The customer support team went above and beyond to adjust our itinerary at the last minute. Professionalism at its best.',
      image: 'client-5.png'
    }
  ];

  // Function to change the active review
  setReview(index: number) {
    this.activeIndex = index;
  }
}
