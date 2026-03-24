import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-trending',
  standalone: true,           // Ensure this is here
  imports: [RouterLink],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export class Trending implements OnInit {
  destinations: any[] = [];

  // CRITICAL: The ': DestinationService' part is what tells Angular what to inject.
  // Without it, you get the "JIT compilation failed" error.
  constructor(private ds: DestinationService) {}

  ngOnInit() {
    this.destinations = this.ds.getDestinations();
  }
}


// export class Trending {
//   destinations = [
//     { name: 'Paris', tours: '100+', image: 'image.png' },
//     { name: 'Singapore', tours: '80+', image: 'image-1.png' },
//     { name: 'Roma', tours: '150+', image: 'image-2.png' },
//     { name: 'Bangkok', tours: '100+', image: 'image-3.png' },
//     { name: 'Bali', tours: '80+', image: 'image-4.png' },
//     { name: 'Phuket', tours: '150+', image: 'image-5.png' },
//     { name: 'Tokyo', tours: '100+', image: 'image-6.png' },
//     { name: 'Cappadocia', tours: '80+', image: 'image-7.png' },
//   ];
// }




