import { Component } from '@angular/core';

interface Guide {
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  image: string;
  readTime: string;
  views: string;
}

@Component({
  selector: 'app-travel-guides',
  templateUrl: './travel-guides.html'
})
export class TravelGuides {
  public selectedFilter = 'all';

  public categories = [
    { id: 'all', label: 'All Guides' },
    { id: 'city', label: 'City Guides' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'beach', label: 'Beach' },
    { id: 'cultural', label: 'Cultural' }
  ];

  public allGuides: Guide[] = [
    {
      title: 'Ultimate Paris Guide',
      description: 'From the Eiffel Tower to hidden cafes, discover the City of Lights like a local.',
      category: 'city',
      categoryLabel: 'City Guide',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
      readTime: '15 min read',
      views: '12.4K views'
    },
    {
      title: 'Bali Wellness Retreat',
      description: 'Find your zen in Bali with our guide to the best temples, beaches, and spas.',
      category: 'beach',
      categoryLabel: 'Beach & Wellness',
      image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&h=400&fit=crop',
      readTime: '20 min read',
      views: '8.7K views'
    },
    {
      title: 'Japan Cherry Blossom',
      description: 'Experience the magic of sakura season with our comprehensive Japan guide.',
      category: 'cultural',
      categoryLabel: 'Cultural',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop',
      readTime: '25 min read',
      views: '15.2K views'
    },
    {
      title: 'Italian Dolce Vita',
      description: "From Rome's ruins to Tuscany's vineyards, savor the sweet life in Italy.",
      category: 'cultural',
      categoryLabel: 'Food & Culture',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&fit=crop',
      readTime: '18 min read',
      views: '9.3K views'
    },
    {
      title: 'Maldives Paradise',
      description: 'Crystal waters, overwater villas, and world-class diving in paradise.',
      category: 'beach',
      categoryLabel: 'Luxury Beach',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
      readTime: '12 min read',
      views: '11.8K views'
    },
    {
      title: "World's Best Hikes",
      description: 'Epic trails from Patagonia to Nepal for the ultimate adventure seeker.',
      category: 'adventure',
      categoryLabel: 'Adventure',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop',
      readTime: '30 min read',
      views: '6.5K views'
    }
  ];

  // Logic to filter the guides based on selection
  get filteredGuides() {
    return this.selectedFilter === 'all'
      ? this.allGuides
      : this.allGuides.filter(g => g.category === this.selectedFilter);
  }

  setFilter(id: string) {
    this.selectedFilter = id;
  }
}
