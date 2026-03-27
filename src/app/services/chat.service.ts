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

  // Initial greeting only
  messages = signal<ChatMessage[]>([
    { text: 'Hi there! 👋 Welcome to Viatours. How can I help you today?', sender: 'bot', time: new Date() }
  ]);

  toggle() { this.isOpen.update(v => !v); }
  open() { this.isOpen.set(true); }
  close() { this.isOpen.set(false); }

  /**
   * Adds the user's message to the UI.
   * Note: The actual sending to Crisp is handled in app.ts
   */
  sendMessage(userText: string) {
    if (!userText.trim()) return;

    const newMessage: ChatMessage = {
      text: userText,
      sender: 'user',
      time: new Date()
    };

    this.messages.update(prev => [...prev, newMessage]);
  }

  /**
   * Pushes real messages from your Crisp Dashboard into the UI.
   * Called by app.ts
   */
  receiveMessage(agentText: string) {
    const botMsg: ChatMessage = {
      text: agentText,
      sender: 'bot',
      time: new Date()
    };

    this.messages.update(prev => [...prev, botMsg]);
    this.isTyping.set(false); // Stop typing indicator
  }
}
