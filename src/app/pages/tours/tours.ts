import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-tours',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class Tours {


    features = [
    {
      id: 1,
      title: 'Centipede Tour - Guided Arizona Desert Tour by ATV',
      city: 'Paris, France',
      price: '$189.25',
      day: '4',
      image: 'feature-1.png',
      alt: 'feature 1',
      rating: 4.8,
      reviews: 243,
      category: 'Desert',
    },
    {
      id: 2,
      title: 'Molokini and Turtle Town Snorkeling Adventure Aboard',
      city: 'New York, USA',
      price: '$225',
      day: '6',
      image: 'feature-2.png',
      alt: 'feature 2',
      rating: 4.7,
      reviews: 150,
      category: 'Beach',
    },
    {
      id: 3,
      title: 'Westminster Walking Tour & Westminster Abbey Entry',
      city: 'London, UK',
      price: '$943',
      day: '8',
      image: 'feature-3.png',
      alt: 'feature 3',
      rating: 4.9,
      reviews: 97,
       category: 'Westminster',
    },
    {
      id: 4,
      title: 'All Inclusive Ultimate Circle Island Day Tour with Lunch',
      city: 'New York, USA',
      price: '$771',
      day: '3',
      image: 'feature-4.png',
      alt: 'feature 4',
      rating: 4.6,
      reviews: 263,
       category: 'Mountain',

    },
     {
      id: 1,
      title: 'Centipede Tour - Guided Arizona Desert Tour by ATV',
      city: 'Paris, France',
      price: '$189.25',
      day: '4',
      image: 'feature-1.png',
      alt: 'feature 1',
      rating: 4.8,
      reviews: 243,
      category: 'Desert',
    },
    {
      id: 2,
      title: 'Molokini and Turtle Town Snorkeling Adventure Aboard',
      city: 'New York, USA',
      price: '$225',
      day: '6',
      image: 'feature-2.png',
      alt: 'feature 2',
      rating: 4.7,
      reviews: 150,
      category: 'Beach',
    },
    {
      id: 3,
      title: 'Westminster Walking Tour & Westminster Abbey Entry',
      city: 'London, UK',
      price: '$943',
      day: '8',
      image: 'feature-3.png',
      alt: 'feature 3',
      rating: 4.9,
      reviews: 97,
       category: 'Westminster',
    },
    {
      id: 4,
      title: 'All Inclusive Ultimate Circle Island Day Tour with Lunch',
      city: 'New York, USA',
      price: '$771',
      day: '3',
      image: 'feature-4.png',
      alt: 'feature 4',
      rating: 4.6,
      reviews: 263,
       category: 'Mountain',

    },
  ];

}













