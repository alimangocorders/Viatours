import { Component, ViewChild, ElementRef, effect, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ChatService } from './services/chat.service';
import { Crisp } from "crisp-sdk-web";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {

  showLayout = true;
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  private titleObserver?: MutationObserver;

  constructor(
    private router: Router,
    public chatService: ChatService
  ) {

    /* ---------------- NAVIGATION LOGIC ---------------- */

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {

        const currentRoute = event.urlAfterRedirects;

        this.showLayout = !(
          currentRoute.includes('login') ||
          currentRoute.includes('signup')
        );

        window.scrollTo(0, 0);
      });


    /* ---------------- CHAT AUTO SCROLL ---------------- */

    effect(() => {

      const isOpen = this.chatService.isOpen();
      this.chatService.messages();
      this.chatService.isTyping();

      if (isOpen) {
        this.clearCrispBadge();
      }

      setTimeout(() => this.scrollToBottom(), 50);

    });

  }

  ngOnInit() {

    /* ---------------- CLEAR CRISP CACHE ---------------- */

    localStorage.removeItem("crisp-client/session/tokens");
    localStorage.removeItem("crisp-client/settings");


    /* ---------------- INITIALIZE CRISP ---------------- */

    Crisp.configure("5b79bd3c-e58d-4d17-9563-d6f74061d363");

    Crisp.chat.hide();


    /* ---------------- DISABLE TAB BADGE ---------------- */

    (window as any).CRISP_RUNTIME_CONFIG = {
      disable_notification_sound: true,
      disable_mobile_notifications: true
    };


    /* ---------------- CLEAR UNREAD MESSAGES ---------------- */

    this.clearCrispBadge();


    /* ---------------- RESET TAB TITLE ---------------- */

    this.titleObserver = new MutationObserver(() => {

      if (document.title.includes("(")) {
        document.title = "Viatours";
      }

    });

    this.titleObserver.observe(document.querySelector('title')!, {
      subtree: true,
      characterData: true,
      childList: true
    });


    /* ---------------- MESSAGE LISTENER ---------------- */

    Crisp.message.onMessageReceived((message: any) => {

      if (message.type === "text") {

        this.chatService.receiveMessage(message.content);

        this.clearCrispBadge();

      }

    });

  }


  /* ---------------- MARK CRISP MESSAGES AS READ ---------------- */

  private clearCrispBadge() {

    if ((window as any).$crisp) {
      (window as any).$crisp.push(["do", "message:read"]);
    }

    document.title = "Viatours";

  }


  /* ---------------- SCROLL CHAT ---------------- */

  private scrollToBottom(): void {

    if (this.scrollContainer) {

      const el = this.scrollContainer.nativeElement;

      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth'
      });

    }

  }


  /* ---------------- SEND MESSAGE ---------------- */

  onSendMessage(input: HTMLInputElement) {

    const text = input.value.trim();

    if (!text) return;

    this.chatService.sendMessage(text);

    Crisp.message.sendText(text);

    this.clearCrispBadge();

    input.value = '';

  }


  /* ---------------- DESTROY ---------------- */

  ngOnDestroy() {

    if (this.titleObserver) {
      this.titleObserver.disconnect();
    }

  }

}
