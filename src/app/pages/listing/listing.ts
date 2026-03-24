import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TripService } from '../../services/trip.service'; // Ensure path is correct

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listing.html',
  styleUrl: './listing.css',
})
export class Listing implements OnInit {
  // These categories can eventually be used for filtering logic
  filterTypes = ['Nature Tours', 'Adventure Tours', 'Cultural Tours', 'Food Tours', 'City Tours', 'Cruises Tours'];

  tourList: any[] = [];

  constructor(private tripService: TripService) {}

  ngOnInit() {
    // Fetch the unified data from your service
    this.tourList = this.tripService.getAllTours();
  }
}
