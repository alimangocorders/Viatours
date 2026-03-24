import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private tourList = [
    {
      id: 1,
      title: 'Phi Phi Islands Adventure Day Trip with Seaview Lunch',
      location: 'Phuket, Thailand',
      city: 'Phuket',
      image: 'feature-1.png',
      alt: 'Phi Phi Island Tour',
      rating: 4.8,
      reviews: 282,
      duration: '2 Days 1 Night',
      price: 114,
      oldPrice: 1200,
      discount: '20% OFF',
      day: 4,
      tag: 'BESTSELLER',
      category: 'Adventure Tours',
      about: 'Experience the thrill of the Andaman Sea. This guided tour takes you through the stunning Phi Phi Islands, offering crystal clear waters, hidden lagoons, and a premium seaview lunch.',
      included: ['Professional Guide', 'Speedboat Transfer', 'Snorkeling Gear', 'Seaview Lunch', 'National Park Fees'],
      excluded: ['Hotel Pickup (Outside Zone)', 'Alcoholic Drinks', 'Personal Expenses', 'Tips'],
      itinerary: [
        { day: 'Day 1', title: 'Island Hopping', desc: 'Visit Maya Bay, Pileh Lagoon, and Viking Cave.' },
        { day: 'Day 2', title: 'Sunrise Snorkeling', desc: 'Early morning swim at Bamboo Island before the crowds arrive.' }
      ]
    },
    {
      id: 2,
      title: 'James Bond Island & Phang Nga Bay Premium Speedboat Tour',
      location: 'Phuket, Thailand',
      city: 'Phang Nga',
      image: 'feature-2.png',
      alt: 'James Bond Island',
      rating: 4.7,
      reviews: 156,
      duration: '1 Day',
      price: 85,
      oldPrice: 150,
      discount: null,
      day: 6,
      tag: 'FEATURED',

      category: 'Nature Tours',
      about: 'Explore the iconic limestone cliffs of Phang Nga Bay. Visit Khao Phing Kan, famously known as James Bond Island, and canoe through majestic sea caves.',
      included: ['Canoeing Gear', 'Buffet Lunch on Panyee Island', 'Soft Drinks', 'Insurance'],
      excluded: ['National Park Entry Fee (400 THB)', 'Private Photo Service'],
      itinerary: [
        { day: 'Morning', title: 'Bay Exploration', desc: 'Cruise through the limestone karsts of Phang Nga.' },
        { day: 'Afternoon', title: 'James Bond Island', desc: 'Photo stop at the famous needle rock and Koh Panyee village.' }
      ]
    },
    {
      id: 3,
      title: 'Elephant Jungle Sanctuary Ethical Day Trip from Phuket',
      location: 'Kathu, Thailand',
      city: 'Kathu',
      image: 'feature-3.png',
      alt: 'Elephant Sanctuary',
      rating: 4.9,
      reviews: 310,
      duration: 'Half Day',
      price: 65,
      oldPrice: 80,
      discount: '15% OFF',
      day: 8,
      tag: null,
      category: 'Cultural Tours',
      about: 'Support ethical tourism at the Elephant Jungle Sanctuary. Feed, bathe, and learn about elephant conservation in a natural environment without riding.',
      included: ['Round-trip Transfer', 'Elephant Food/Snacks', 'Traditional Thai Buffet', 'Photography Service'],
      excluded: ['Souvenirs', 'Personal Photos'],
      itinerary: [
        { day: 'Hour 1', title: 'Introduction', desc: 'Learn about the history and behavior of rescued elephants.' },
        { day: 'Hour 3', title: 'Mud Spa & Bathing', desc: 'Interact with elephants in their mud pool and river.' }
      ]
    },
    {
      id: 4,
      title: 'Similan Islands Snorkeling Day Trip by Speed Catamaran',
      location: 'Khao Lak, Thailand',
      city: 'Khao Lak',
      image: 'feature-4.png',
      alt: 'Similan Islands',
      rating: 4.6,
      reviews: 94,
      duration: '1 Day',
      price: 130,
      oldPrice: 180,
      discount: null,
      day: 3,
      tag: 'TOP RATED',
      category: 'Cruises Tours',
      about: 'Discover the "Maldives of Thailand." The Similan Islands offer the best diving and snorkeling in the country with white sandy beaches and vibrant coral reefs.',
      included: ['Premium Catamaran Ride', 'Breakfast & Lunch', 'Snorkeling Equipment', 'Tour Guide'],
      excluded: ['Fins Rental', 'Wetsuits'],
      itinerary: [
        { day: '08:00 AM', title: 'Departure', desc: 'Depart from Nam Khem Pier by speedboat.' },
        { day: '11:00 AM', title: 'Sailing Rock', desc: 'Climb the iconic viewpoint on Island No. 8.' }
      ]
    }
  ];

  constructor() {}

  getAllTours() {
    return this.tourList;
  }

  getTourById(id: number) {
    return this.tourList.find(t => t.id === id);
  }
}
