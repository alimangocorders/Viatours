import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripService } from '../../services/trip.service'; // Ensure path is exact

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
    private router: Router,
    private tripService: TripService // Use the class name here
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.trip = this.tripService.getTourById(id);
  }

  goToBooking() {
    this.router.navigate(['/booking'], {
      state: { selectedTrip: this.trip }
    });
  }
}
