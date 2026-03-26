import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './listing.html',
  styleUrl: './listing.css',
})
export class Listing implements OnInit {
  filterTypes = ['Nature Tours', 'Adventure Tours', 'Cultural Tours', 'Food Tours', 'City Tours', 'Cruises Tours'];

  allTours: any[] = [];
  selectedFilters: Set<string> = new Set();
  sortOption: string = 'Recommended';
  searchLocation: string = '';

  dateRange = {
    start: '',
    end: ''
  };

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.allTours = this.tripService.getAllTours();

    // Catch query parameters from the Hero component
    this.route.queryParams.subscribe(params => {
      if (params['location']) {
        this.searchLocation = params['location'].toLowerCase();
      }

      if (params['date']) {
        this.dateRange.start = params['date'];
        this.dateRange.end = params['date'];
      }

      if (params['type']) {
        this.selectedFilters.clear();
        this.selectedFilters.add(params['type']);
      }
    });
  }

  toggleFilter(type: string, event: any) {
    if (event.target.checked) {
      this.selectedFilters.add(type);
    } else {
      this.selectedFilters.delete(type);
    }
  }

  isFilterChecked(type: string): boolean {
    return this.selectedFilters.has(type);
  }

  clearDate() {
    this.dateRange.start = '';
    this.dateRange.end = '';
  }

  get tourList() {
    let filtered = [...this.allTours];

    // 1. Filter by Location Search
    if (this.searchLocation) {
      filtered = filtered.filter(tour =>
        tour.location.toLowerCase().includes(this.searchLocation) ||
        tour.title.toLowerCase().includes(this.searchLocation)
      );
    }

    // 2. Filter by Date Range
    if (this.dateRange.start && this.dateRange.end) {
      filtered = filtered.filter(tour => {
        const tourDate = new Date(tour.availableDate).getTime();
        const start = new Date(this.dateRange.start).getTime();
        const end = new Date(this.dateRange.end).getTime();
        return tourDate >= start && tourDate <= end;
      });
    } else if (this.dateRange.start) {
      filtered = filtered.filter(tour => tour.availableDate === this.dateRange.start);
    }

    // 3. Filter by Category (Type)
    if (this.selectedFilters.size > 0) {
      filtered = filtered.filter(tour => this.selectedFilters.has(tour.category));
    }

    // 4. Sorting Logic
    if (this.sortOption === 'Price: Low to High') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'Top Rated') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      filtered.sort((a, b) => a.id - b.id);
    }

    return filtered;
  }
}
