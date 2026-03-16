import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {


      destinations = [
    { id: '1', image: 'logo-1.png' , alt: 'logo 1', },
    { id: '2', image: 'logo-3.png', alt: 'logo 2', },
    { id: '3', image: 'logo-4.png', alt: 'logo 3', },
    { id: '1', image: 'logo-5.png' , alt: 'logo 1', },
    { id: '2', image: 'logo-6.png', alt: 'logo 2', },
    { id: '3', image: 'logo-2.png', alt: 'logo 3', },
  ];

}
