import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for chat input
import { ChatService } from './services/chat.service'; // Adjust this path to your service file

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, CommonModule, FormsModule], // Added FormsModule
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showLayout = true;

  constructor(
    private router: Router,
    public chatService: ChatService // 1. Inject the Global Chat Service
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentRoute = event.urlAfterRedirects;
      // Hide layout AND chat widget on auth pages
      this.showLayout = !(currentRoute.includes('login') || currentRoute.includes('signup'));

      // Auto-close chat if user navigates to login/signup
      if (!this.showLayout) {
        this.chatService.close();
      }
    });
  }
}
