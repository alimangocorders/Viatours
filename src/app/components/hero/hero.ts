import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

// 1. Corrected Imports: Ensure these paths match your actual folder structure
import { CustomDropdownComponent } from '../custom-dropdown/custom-dropdown';
import { CustomCalendarComponent } from '../custom-calendar/custom-calendar';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CustomDropdownComponent, // Now correctly referenced
    CustomCalendarComponent  // Now correctly referenced
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  searchForm = {
    location: '',
    date: '',
    type: ''
  };

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/listing'], {
      queryParams: {
        location: this.searchForm.location,
        date: this.searchForm.date,
        type: this.searchForm.type
      }
    });
  }
}
