import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripService } from '../../services/trip.service'; // Adjust path

@Component({
  selector: 'app-trip-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-detail.html'
})
export class TripDetail implements OnInit {
  trip: any;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService
  ) {}

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.trip = this.tripService.getTourById(id);
}
}
