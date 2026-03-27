import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TripService } from '../../services/trip.service';
// Ensure this path exactly matches your file structure
import { CustomRangeCalendar, DateRange } from '../../components//custom-range-calendar/custom-range-calendar';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CustomRangeCalendar],
  templateUrl: './listing.html',
  styleUrl: './listing.css',
})
export class Listing implements OnInit {
  filterTypes = ['Nature Tours', 'Adventure Tours', 'Cultural Tours', 'Food Tours', 'City Tours', 'Cruises Tours'];
  sortOptions = ['Recommended', 'Price: Low to High', 'Top Rated'];

  allTours: any[] = [];
  selectedFilters: Set<string> = new Set();
  sortOption: string = 'Recommended';
  searchLocation: string = '';

  // UI States for Custom Dropdowns
  isSortOpen = false;
  isCalendarOpen = false;

  dateRange = {
    start: '',
    end: ''
  };

  // Pagination State
  currentPage = 1;
  itemsPerPage = 6;

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private eRef: ElementRef
  ) {}

  /**
   * Closes dropdowns when clicking outside.
   * Using 'MouseEvent' instead of 'any' to avoid property errors.
   */
  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isSortOpen = false;
      this.isCalendarOpen = false;
    }
  }

  ngOnInit() {
    this.allTours = this.tripService.getAllTours();

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

  /**
   * Correctly handles the custom DateRange object emitted by the calendar
   */
  onDateRangePicked(range: DateRange) {
    // Explicitly check that range and its properties exist
    if (range && range.start && range.end) {
      const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      this.dateRange.start = formatDate(range.start);
      this.dateRange.end = formatDate(range.end);
      this.currentPage = 1; // Reset to first page on filter change

      // Smooth transition: close the calendar after selection is complete
      setTimeout(() => {
        this.isCalendarOpen = false;
      }, 300);
    }
  }

  selectSort(option: string) {
    this.sortOption = option;
    this.isSortOpen = false;
    this.currentPage = 1; // Reset to first page on sort change
  }

  toggleFilter(type: string, event: any) {
    this.currentPage = 1; // Reset to first page on filter change
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
    this.currentPage = 1;
  }

  // Pagination Controls
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.scrollToTop();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.scrollToTop();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.scrollToTop();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTours.length / this.itemsPerPage);
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Internal getter for the full filtered list
  get filteredTours() {
    let filtered = [...this.allTours];

    // 1. Filter by Location
    if (this.searchLocation) {
      filtered = filtered.filter(tour =>
        tour.location.toLowerCase().includes(this.searchLocation) ||
        tour.title.toLowerCase().includes(this.searchLocation)
      );
    }

    // 2. Filter by Date Range (YYYY-MM-DD comparison)
    if (this.dateRange.start && this.dateRange.end) {
      filtered = filtered.filter(tour => {
        const tourDate = tour.availableDate;
        return tourDate >= this.dateRange.start && tourDate <= this.dateRange.end;
      });
    } else if (this.dateRange.start) {
      filtered = filtered.filter(tour => tour.availableDate === this.dateRange.start);
    }

    // 3. Filter by Category
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

  // This is what the HTML will loop through
  get tourList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredTours.slice(startIndex, startIndex + this.itemsPerPage);
  }
}
