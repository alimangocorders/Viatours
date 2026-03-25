import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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

  // Updated to handle Range
  dateRange = {
    start: '',
    end: ''
  };

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.allTours = this.tripService.getAllTours();
  }

  toggleFilter(type: string, event: any) {
    if (event.target.checked) {
      this.selectedFilters.add(type);
    } else {
      this.selectedFilters.delete(type);
    }
  }

  // Logic to clear the date filters
  clearDate() {
    this.dateRange.start = '';
    this.dateRange.end = '';
  }

  get tourList() {
    let filtered = [...this.allTours];

    // 1. Filter by Date Range
    if (this.dateRange.start && this.dateRange.end) {
      filtered = filtered.filter(tour => {
        const tourDate = new Date(tour.availableDate).getTime();
        const start = new Date(this.dateRange.start).getTime();
        const end = new Date(this.dateRange.end).getTime();
        return tourDate >= start && tourDate <= end;
      });
    }
    // If only start date is picked, show tours for that specific day
    else if (this.dateRange.start) {
      filtered = filtered.filter(tour => tour.availableDate === this.dateRange.start);
    }

    // 2. Filter by Category (Type)
    if (this.selectedFilters.size > 0) {
      filtered = filtered.filter(tour => this.selectedFilters.has(tour.category));
    }

    // 3. Sorting Logic
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
