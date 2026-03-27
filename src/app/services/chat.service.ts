import { Injectable, signal } from '@angular/core';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  time: Date;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  isOpen = signal(false);
  isTyping = signal(false); // To show a "typing..." indicator
  userMessageCount = signal(0);

  messages = signal<ChatMessage[]>([
    { text: 'Hi there! 👋 Welcome to Viatours. How can I help you today?', sender: 'bot', time: new Date() }
  ]);

  toggle() { this.isOpen.update(v => !v); }
  open() { this.isOpen.set(true); }
  close() { this.isOpen.set(false); }

  sendMessage(userText: string) {
    if (!userText.trim()) return;

    // Add User Message
    const newMessage: ChatMessage = { text: userText, sender: 'user', time: new Date() };
    this.messages.update(prev => [...prev, newMessage]);

    // Increment Counter
    const newCount = this.userMessageCount() + 1;
    this.userMessageCount.set(newCount);

    // Bot replies on message 4 and 6
    if (newCount === 4 || newCount === 6) {
      this.handleBotResponse(newCount);
    }
  }

  private handleBotResponse(count: number) {
    this.isTyping.set(true);

    setTimeout(() => {
      let reply = count === 4
        ? "I see! Let me check the availability for those dates. One moment..."
        : "I've found some great options! Would you like me to send the itinerary to your email?";

      const botMsg: ChatMessage = { text: reply, sender: 'bot', time: new Date() };
      this.messages.update(prev => [...prev, botMsg]);
      this.isTyping.set(false);
    }, 2000); // 2 second delay to feel real
  }
}
