import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-special-offer',
  imports: [CommonModule],
  templateUrl: './special-offer.html',
  styleUrl: './special-offer.css',
})
export class SpecialOffer {


    destinations = [
    { id: '1', text1: '60 % OFF', text2: 'Enjoy Upto ', text3: 'on Your Booking', image: 'offer-1.png' , alt: 'offer 1', },
    { id: '2', text1: 'Are You Ready To Turkey Tour', text2: '80% Discount', image: 'offer-2.png', alt: 'offer 2', },
    { id: '3', text1: 'Discover the wow of europe', image: 'offer-3.png', alt: 'offer 3', },
  ];
}
