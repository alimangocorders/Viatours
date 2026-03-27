import { Component, ViewChild, ElementRef, effect } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showLayout = true;
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor(private router: Router, public chatService: ChatService) {
    // LAYOUT LOGIC
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentRoute = event.urlAfterRedirects;
      this.showLayout = !(currentRoute.includes('login') || currentRoute.includes('signup'));
      window.scrollTo(0, 0); // Fix page navigation scroll
    });

    // CHAT AUTO-SCROLL LOGIC
    effect(() => {
      // Re-run whenever messages or typing status changes
      this.chatService.messages();
      this.chatService.isTyping();

      // Wait for DOM to render the new bubble, then scroll
      setTimeout(() => this.scrollToBottom(), 50);
    });
  }

  private scrollToBottom(): void {
    if (this.scrollContainer) {
      const el = this.scrollContainer.nativeElement;
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  }

  onSendMessage(input: HTMLInputElement) {
    const text = input.value.trim();
    if (text) {
      this.chatService.sendMessage(text);
      input.value = '';
    }
  }
}
