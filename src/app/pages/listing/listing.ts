import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing.html',
  styleUrl: './listing.css',
})
export class Listing {
  filterTypes = ['Nature Tours', 'Adventure Tours', 'Cultural Tours', 'Food Tours', 'City Tours', 'Cruises Tours'];

  tourList = [
    {
      id: 1,
      title: 'Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour',
      location: 'Phuket, Thailand',
      image: 'feature-1.png',
      rating: 4.8,
      reviews: 282,
      duration: '2 Days 1 Night',
      price: 114,
      oldPrice: 1200,
      discount: '20% OFF',
      tag: 'BESTSELLER'
    },
    {
      id: 2,
      title: 'James Bond Island & Phang Nga Bay Premium Speedboat Tour',
      location: 'Phuket, Thailand',
      image: 'feature-2.png',
      rating: 4.7,
      reviews: 156,
      duration: '1 Day',
      price: 85,
      oldPrice: 150,
      discount: null,
      tag: 'FEATURED'
    },
    {
      id: 3,
      title: 'Elephant Jungle Sanctuary Ethical Day Trip from Phuket',
      location: 'Kathu, Thailand',
      image: 'feature-3.png',
      rating: 4.9,
      reviews: 310,
      duration: 'Half Day',
      price: 65,
      oldPrice: 80,
      discount: '15% OFF',
      tag: null
    },
    {
      id: 4,
      title: 'Similan Islands Snorkeling Day Trip by Speed Catamaran',
      location: 'Khao Lak, Thailand',
      image: 'feature-4.png',
      rating: 4.6,
      reviews: 94,
      duration: '1 Day',
      price: 130,
      oldPrice: 180,
      discount: null,
      tag: 'TOP RATED'
    }
  ];
}