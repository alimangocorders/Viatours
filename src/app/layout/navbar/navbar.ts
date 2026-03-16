import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common'; // Needed for [class] and @if

@Component({
  selector: 'app-navbar',
  standalone: true,
  // Add RouterLink to enable navigation in HTML
  // Add RouterLinkActive to style the current active page
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;

}
