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

  // Track if this is the user's first time sending a message
  private firstMessageSent = false;

  messages = signal<ChatMessage[]>([
    { text: 'Hi there! 👋 Welcome to Viatours. How can I help you today?', sender: 'bot', time: new Date() }
  ]);

  toggle() { this.isOpen.update(v => !v); }
  open() { this.isOpen.set(true); }
  close() { this.isOpen.set(false); }

  sendMessage(userText: string) {
    if (!userText.trim()) return;

    const newMessage: ChatMessage = {
      text: userText,
      sender: 'user',
      time: new Date()
    };

    this.messages.update(prev => [...prev, newMessage]);

    // --- AUTO REPLY LOGIC ---
    if (!this.firstMessageSent) {
      this.firstMessageSent = true;
      this.triggerAutoReply();
    }
  }

  private triggerAutoReply() {
    // 1. Show the typing indicator to make it feel real
    this.isTyping.set(true);

    // 2. Wait 1.5 seconds, then send the reply
    setTimeout(() => {
      const autoReply: ChatMessage = {
        text: "Thanks for reaching out! 🚀 One of our travel experts will be with you shortly.",
        sender: 'bot',
        time: new Date()
      };

      this.messages.update(prev => [...prev, autoReply]);
      this.isTyping.set(false);
    }, 1500);
  }

  receiveMessage(agentText: string) {
    const botMsg: ChatMessage = {
      text: agentText,
      sender: 'bot',
      time: new Date()
    };

    this.messages.update(prev => [...prev, botMsg]);
    this.isTyping.set(false);
  }
}
