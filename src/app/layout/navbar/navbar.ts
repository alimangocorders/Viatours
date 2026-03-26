import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; // 1. Import it here
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive, // 2. Add it here
    FormsModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearchEnter() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/listing'], {
        queryParams: { location: this.searchTerm }
      });
      this.searchTerm = '';
      this.isMenuOpen = false;
    }
  }
}
