import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common'; // Important for @if to work in some versions

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // This variable will control the visibility of your layout
  showLayout = true;

  constructor(private router: Router) {
    // We subscribe to router events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Logic: Hide the layout if the current path is 'login' or 'signup'
      const currentRoute = event.urlAfterRedirects;
      this.showLayout = !(currentRoute.includes('login') || currentRoute.includes('signup'));
    });
  }
}
