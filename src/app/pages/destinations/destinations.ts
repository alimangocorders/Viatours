import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Required for search binding
import { DestinationService } from '../../services/destination.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations implements OnInit {
  allDestinations: any[] = [];
  searchTerm: string = '';

  // IDs used to categorize the initial lists
  trendingIds = ['paris', 'singapore', 'roma', 'bangkok', 'bali', 'phuket'];
  featuredIds = ['paris', 'new-york', 'london'];

  constructor(private ds: DestinationService) {}

  ngOnInit() {
    this.allDestinations = this.ds.getDestinations();
  }

  // Filtered list for Trending Destinations
  get filteredTrending() {
    return this.allDestinations
      .filter(dest => this.trendingIds.includes(dest.id))
      .filter(dest =>
        dest.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        dest.country.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }

  // Filtered list for Available Tours (Features)
  get filteredFeatures() {
    return this.allDestinations
      .filter(dest => this.featuredIds.includes(dest.id))
      .filter(dest =>
        dest.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        dest.about.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }
}
