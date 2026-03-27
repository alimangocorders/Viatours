import { Injectable, signal } from '@angular/core';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  time: Date;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  isOpen = signal(false);
  isTyping = signal(false);
  userMessageCount = signal(0);

  messages = signal<ChatMessage[]>([
    { text: 'Hi there! 👋 Welcome to Viatours. How can I help you today?', sender: 'bot', time: new Date() }
  ]);

  toggle() { this.isOpen.update(v => !v); }
  open() { this.isOpen.set(true); }
  close() { this.isOpen.set(false); }

  sendMessage(userText: string) {
    if (!userText.trim()) return;

    // 1. Add User Message
    const newMessage: ChatMessage = { text: userText, sender: 'user', time: new Date() };
    this.messages.update(prev => [...prev, newMessage]);

    // 2. Update Count
    const newCount = this.userMessageCount() + 1;
    this.userMessageCount.set(newCount);

    // 3. Trigger Bot Response
    this.handleBotResponse(newCount);
  }

  private handleBotResponse(count: number) {
    this.isTyping.set(true);

    setTimeout(() => {
      let reply = "";
      switch (count) {
        case 1: reply = "That sounds like a great plan! Which destination are you interested in?"; break;
        case 2: reply = "Excellent choice! How many people are traveling with you?"; break;
        case 3: reply = "Got it. Let me check the best group rates for you..."; break;
        case 4: reply = "I see! Let me check the availability for those dates. One moment..."; break;
        default: reply = "Thank you for the details! Our team will get back to you shortly with a custom quote.";
      }

      const botMsg: ChatMessage = { text: reply, sender: 'bot', time: new Date() };
      this.messages.update(prev => [...prev, botMsg]);
      this.isTyping.set(false);
    }, 1500);
  }
}
