import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DestinationService {
  private allDestinations = [
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      image: 'image.png',
      about: 'Paris, France’s capital, is a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.',
      highlights: [
        { id: 1, title: 'Eiffel Tower Summit' },
        { id: 2, title: 'Louvre Museum Tour' },
        { id: 3, title: 'Seine River Dinner Cruise' }
      ],
      activities: [
        { id: 1, title: 'Photography', text: 'Capture the Eiffel Tower', icon: 'ri-camera-line' },
        { id: 2, title: 'Cuisine', text: 'Pastry making class', icon: 'ri-restaurant-line' }
      ],
      time: 'April - October',
      currency: 'Euro (EUR)',
      language: 'French'
    },
    {
      id: 'singapore',
      name: 'Singapore',
      country: 'Singapore',
      image: 'image-1.png',
      about: 'Singapore is a sunny, tropical island in Southeast Asia, known for its futuristic architecture and incredible street food.',
      highlights: [
        { id: 1, title: 'Gardens by the Bay' },
        { id: 2, title: 'Marina Bay Sands' }
      ],
      activities: [
        { id: 1, title: 'Shopping', text: 'Orchard Road luxury', icon: 'ri-shopping-bag-line' }
      ],
      time: 'Year-round',
      currency: 'Singapore Dollar (SGD)',
      language: 'English, Mandarin'
    },
    {
      id: 'roma',
      name: 'Roma',
      country: 'Italy',
      image: 'image-2.png',
      about: 'Step back in time in the Eternal City, home to nearly 3,000 years of globally influential art, architecture, and culture.',
      highlights: [
        { id: 1, title: 'The Colosseum' },
        { id: 2, title: 'Vatican City' }
      ],
      activities: [
        { id: 1, title: 'History', text: 'Ancient ruins tour', icon: 'ri-ancient-gate-line' }
      ],
      time: 'May - September',
      currency: 'Euro (EUR)',
      language: 'Italian'
    },
    {
      id: 'bangkok',
      name: 'Bangkok',
      country: 'Thailand',
      image: 'image-3.png',
      about: 'Bangkok is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals.',
      highlights: [
        { id: 1, title: 'The Grand Palace' },
        { id: 2, title: 'Wat Arun Temple' }
      ],
      activities: [
        { id: 1, title: 'Cuisine', text: 'Street food tour', icon: 'ri-restaurant-line' },
        { id: 2, title: 'Boating', text: 'Canal boat ride', icon: 'ri-ship-line' }
      ],
      time: 'November - February',
      currency: 'Thai Baht (THB)',
      language: 'Thai'
    },
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      image: 'image-4.png',
      about: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.',
      highlights: [
        { id: 1, title: 'Ubud Rice Terraces' },
        { id: 2, title: 'Uluwatu Sunset' }
      ],
      activities: [
        { id: 1, title: 'Yoga', text: 'Spiritual retreat', icon: 'ri-heart-line' }
      ],
      time: 'April - October',
      currency: 'Indonesian Rupiah (IDR)',
      language: 'Indonesian'
    },
    {
      id: 'phuket',
      name: 'Phuket',
      country: 'Thailand',
      image: 'image-5.png',
      about: 'Phuket is Thailands largest island. It has some of Thailands most popular beaches, mostly situated along the clear waters of the western shore.',
      highlights: [
        { id: 1, title: 'Phi Phi Island Trip' },
        { id: 2, title: 'Big Buddha Statue' }
      ],
      activities: [
        { id: 1, title: 'Swimming', text: 'Crystal clear waters', icon: 'ri-water-flash-line' }
      ],
      time: 'November - April',
      currency: 'Thai Baht (THB)',
      language: 'Thai'
    },
    {
      id: 'new-york',
      name: 'New York',
      country: 'USA',
      image: 'feature-2.png',
      about: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough.',
      highlights: [
        { id: 1, title: 'Statue of Liberty' },
        { id: 2, title: 'Times Square' }
      ],
      activities: [
        { id: 1, title: 'Sightseeing', text: 'City skyline tour', icon: 'ri-building-2-line' },
               { id: 2, title: 'Cuisine', text: 'Street food tour', icon: 'ri-restaurant-line' },
        { id: 3, title: 'Boating', text: 'Canal boat ride', icon: 'ri-ship-line' }
      ],
      time: 'April - June / Sept - Nov',
      currency: 'US Dollar (USD)',
      language: 'English'
    },
    {
      id: 'london',
      name: 'London',
      country: 'UK',
      image: 'feature-3.png',
      about: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.',
      highlights: [
        { id: 1, title: 'London Eye' },
        { id: 2, title: 'Big Ben & Parliament' }
      ],
      activities: [
        { id: 1, title: 'Culture', text: 'British Museum tour', icon: 'ri-government-line' }
      ],
      time: 'March - May / Sept - Nov',
      currency: 'British Pound (GBP)',
      language: 'English',
      gallery: ['feature-1.png', 'feature-2.png', 'feature-3.png']
    }
  ];

  getDestinations() {
    return this.allDestinations;
  }

  getDestinationById(id: string | null) {
    return this.allDestinations.find(d => d.id === id);
  }
}
