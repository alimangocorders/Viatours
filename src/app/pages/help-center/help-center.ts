import { Component, signal, computed } from '@angular/core'; // 1. Added computed
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ChatService } from '../../services/chat.service'; // Adjust path to your service

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './help-center.html',
  styleUrl: './help-center.css'
})
export class HelpCenter {
  searchQuery = signal('');
  openFaqIndex = signal<number | null>(null); // Start with all closed for better UX on search

  categories = [
    { icon: 'ri-plane-line', title: "Booking Help", desc: "Manage or change your reservations", count: 24, bg: "bg-orange-50", color: "text-(--primary-color)" },
    { icon: 'ri-bank-card-line', title: "Payment & Refunds", desc: "Receipts, payments, refund status", count: 18, bg: "bg-orange-50", color: "text-(--primary-color)" },
    { icon: 'ri-file-text-line', title: "Travel Documents", desc: "Visas, passports, and tickets", count: 12, bg: "bg-orange-50", color: "text-(--primary-color)" },
    { icon: 'ri-shield-check-line', title: "Safety & Insurance", desc: "Coverage and health guidelines", count: 9, bg: "bg-orange-50", color: "text-(--primary-color)" },
    { icon: 'ri-close-circle-line', title: "Cancellations", desc: "Understanding our refund policy", count: 15, bg: "bg-orange-50", color: "text-(--primary-color)" },
    { icon: 'ri-smartphone-line', title: "App Support", desc: "Help with our mobile app", count: 8, bg: "bg-orange-50", color: "text-(--primary-color)" },
  ];

  faqs = [
    { q: "How do I cancel or modify my booking?", a: "Log into your Viatours account and go to 'My Trips'. From there, you can request changes or cancellations. Depending on how close you are to the departure date, fees may apply." },
    { q: "When will I receive my refund?", a: "Once a refund is approved, it typically takes 5–7 business days to appear in your account, depending on your bank or card provider." },
    { q: "Do I need travel insurance?", a: "While not mandatory, we strongly recommend it. Travel insurance protects against unexpected cancellations, medical emergencies, and lost baggage." },
    { q: "What travel documents do I need?", a: "Requirements vary by destination. Generally, you'll need a passport valid for at least 6 months beyond your travel dates." },
  ];

  // 2. Computed signal to filter FAQs based on the search input
  filteredFaqs = computed(() => {
    const term = this.searchQuery().toLowerCase().trim();
    if (!term) return this.faqs;

    return this.faqs.filter(faq =>
      faq.q.toLowerCase().includes(term) ||
      faq.a.toLowerCase().includes(term)
    );
  });



  // 3. Update search behavior
  onSearchEnter() {
    // Scroll smoothly to the FAQ section when search is clicked
    const element = document.getElementById('faq-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleFaq(index: number) {
    this.openFaqIndex.set(this.openFaqIndex() === index ? null : index);
  }

  setSearch(val: string) {
    this.searchQuery.set(val);
    this.onSearchEnter();
  }

  constructor(
    public chatService: ChatService // Inject the global service here
  ) {}
}
