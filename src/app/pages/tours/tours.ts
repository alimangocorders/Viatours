import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TripService } from '../../services/trip.service'; // Adjust path as needed

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class Tours implements OnInit {
  features: any[] = [];

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.features = this.tripService.getAllTours();
  }
}
