import { Component } from '@angular/core';

@Component({
  selector: 'app-trending',
  imports: [],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export class Trending {
  destinations = [
    { name: 'Paris', tours: '100+', image: 'image.png' },
    { name: 'Singapore', tours: '80+', image: 'image-1.png' },
    { name: 'Roma', tours: '150+', image: 'image-2.png' },
    { name: 'Bangkok', tours: '100+', image: 'image-3.png' },
    { name: 'Bali', tours: '80+', image: 'image-4.png' },
    { name: 'Phuket', tours: '150+', image: 'image-5.png' },
    { name: 'Tokyo', tours: '100+', image: 'image-6.png' },
    { name: 'Cappadocia', tours: '80+', image: 'image-7.png' },
  ];
}
