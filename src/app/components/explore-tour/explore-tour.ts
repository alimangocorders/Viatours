import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-tour',
  imports: [],
  templateUrl: './explore-tour.html',
  styleUrl: './explore-tour.css',
})
export class ExploreTour {

  popularthings = [
    { name: 'City Tours', tours: '100+', image: 'icon-1.png' },
    { name: 'Cultural Tours', tours: '80+', image: 'icon-2.png' },
    { name: 'Day Cruises', tours: '150+', image: 'icon-3.png' },
    { name: 'Bus Tours', tours: '100+', image: 'icon-4.png' },
    { name: 'Beach Tours', tours: '80+', image: 'icon-5.png' },
    { name: 'Food Tours', tours: '150+', image: 'icon-5.png' },
  ];

}
