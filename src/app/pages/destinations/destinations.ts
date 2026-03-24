import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations implements OnInit {
  // We initialize these as empty arrays now
  Trending_destinations: any[] = [];
  features: any[] = [];

  constructor(private ds: DestinationService) {}

  ngOnInit() {
    // 1. Fetch all data from the service
    const allData = this.ds.getDestinations();

    // 2. Filter for Trending Destinations
    // We select the specific cities you want for the top section
    const trendingIds = ['paris', 'singapore', 'roma', 'bangkok', 'bali', 'phuket'];
    this.Trending_destinations = allData.filter(dest => trendingIds.includes(dest.id));

    // 3. Filter for Featured Tours
    // We select the specific IDs for the bottom section
    const featuredIds = ['paris', 'new-york', 'london'];
    this.features = allData.filter(dest => featuredIds.includes(dest.id));
  }
}
