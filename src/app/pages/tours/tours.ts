import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class Tours implements OnInit {
  allTours: any[] = [];

  // Filter States
  searchTerm: string = '';
  selectedLocation: string = '';
  selectedCategory: string = 'All';
  maxPrice: number = 5000;
  showFilters: boolean = false;

  categories = ['All', 'Adventure', 'Nature', 'Cultural', 'Cruises', 'City Tour'];

  constructor(private tripService: TripService) {}

  ngOnInit() {
    // Fetching data from the established TripService
    this.allTours = this.tripService.getAllTours();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  get filteredTours() {
    return this.allTours.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            tour.city.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesLocation = !this.selectedLocation ||
                               tour.city.toLowerCase().includes(this.selectedLocation.toLowerCase());

      const matchesCategory = this.selectedCategory === 'All' ||
                               tour.category === this.selectedCategory;

      const matchesPrice = tour.price <= this.maxPrice;

      return matchesSearch && matchesLocation && matchesCategory && matchesPrice;
    });
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedLocation = '';
    this.selectedCategory = 'All';
    this.maxPrice = 5000;
  }
}
