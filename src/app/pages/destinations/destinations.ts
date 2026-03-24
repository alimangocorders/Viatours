import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  imports: [],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations {

    Trending_destinations = [
    { name: 'Paris', title: 'Crystal clear waters, white sandy beaches, and luxury overwater bungalows', date: 'Best: Nov - Apr', tours: '100+', image: 'image.png' },
    { name: 'Singapore', title: 'Crystal clear waters, white sandy beaches, and luxury overwater bungalows', date: 'Best: Nov - Apr', tours: '80+', image: 'image-1.png' },
    { name: 'Roma', title: 'Crystal clear waters, white sandy beaches, and luxury overwater bungalows', date: 'Best: Nov - Apr', tours: '150+', image: 'image-2.png' },
    { name: 'Bangkok', title: 'Crystal clear waters, white sandy beaches, and luxury overwater bungalows', date: 'Best: Nov - Apr', tours: '100+', image: 'image-3.png' },
    { name: 'Bali', title: 'Crystal clear waters, white sandy beaches, and luxury overwater bungalows', date: 'Best: Nov - Apr', tours: '80+', image: 'image-4.png' },
    { name: 'Phuket', title: 'Crystal clear waters, white sandy beaches, and luxury overwater bungalows', date: 'Best: Nov - Apr', tours: '150+', image: 'image-5.png' },
  ];






      features = [
    {
      id: 1,
      title: 'Crystal clear waters, white sandy beaches, and luxury overwater',
      city: 'Paris, France',
      image: 'feature-1.png',
      alt: 'feature 1',
      date: 'Best: Nov - Apr',
      tours: '15'
    },
    {
      id: 2,
      title: 'Molokini and Turtle Town Snorkeling Adventure Aboard',
      city: 'New York, USA',
      image: 'feature-2.png',
      alt: 'feature 2',
      date: 'Best: Nov - Apr',
      tours: '15'
    },
    {
      id: 3,
      title: 'Westminster Walking Tour & Westminster Abbey Entry',
      city: 'London, UK',
      image: 'feature-3.png',
      alt: 'feature 3',
      date: 'Best: Nov - Apr',
      tours: '15'
    },
    {
      id: 4,
      title: 'All Inclusive Ultimate Circle Island Day Tour with Lunch',
      city: 'New York, USA',
      image: 'feature-4.png',
      alt: 'feature 4',
      date: 'Best: Nov - Apr',
      tours: '15'

    },
     {
      id: 1,
      title: 'Centipede Tour - Guided Arizona Desert Tour by ATV',
      city: 'Paris, France',
      image: 'feature-1.png',
      alt: 'feature 1',
      date: 'Best: Nov - Apr',
      tours: '15'
    },
    {
      id: 2,
      title: 'Molokini and Turtle Town Snorkeling Adventure Aboard',
      city: 'New York, USA',
      date: 'Best: Nov - Apr',
      tours: '15',
      image: 'feature-2.png',
      alt: 'feature 2',
    },
    {
      id: 3,
      title: 'Westminster Walking Tour & Westminster Abbey Entry',
      city: 'London, UK',
      date: 'Best: Nov - Apr',
      tours: '15',
      image: 'feature-3.png',
      alt: 'feature 3',
    },
    {
      id: 4,
      title: 'All Inclusive Ultimate Circle Island Day Tour with Lunch',
      city: 'New York, USA',
      date: 'Best: Nov - Apr',
      tours: '15',
      image: 'feature-4.png',
      alt: 'feature 4',

    },
  ];
}
