import { Injectable } from '@angular/core';

export interface ArticleSection {
  id: string;      // Used for the anchor link [fragment]
  title: string;   // The heading text
  content: string; // The paragraph text (can include HTML strings)
  quote?: string;  // Optional pull-quote for that magazine look
}

export interface RecommendedTour {
  id: string;
  name: string;
  image: string;
  price?: string;
  duration?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Introduction paragraph
  sections: ArticleSection[]; // The body of the article
  category: string;
  image: string;
  author: string;
  authorRole: string;
  authorImg: string;
  date: string;
  readTime: string;
  tags: string[];
  recommendedTour?: RecommendedTour; // For the sidebar card
}

@Injectable({ providedIn: 'root' })
export class ArticleService {
private articles: Article[] = [
    {
      id: 'safari-comparison',
      title: 'Kenya vs Tanzania Safari: The Better African Safari Experience',
      excerpt: 'Discover expert tips, destination guides, and inspiring stories about the Great Migration.',
      content: 'Choosing between Kenya and Tanzania for a safari is a delightful dilemma. Both offer iconic landscapes, incredible biodiversity, and the legendary Great Migration, but the experiences differ in subtle, meaningful ways.',
      category: 'Safari',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      author: 'Ali Tufan',
      authorRole: 'Senior Travel Writer',
      authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80',
      date: 'April 6, 2026',
      readTime: '15 min',
      tags: ['Safari', 'Kenya', 'Tanzania'],
      sections: [
        {
          id: 'great-migration',
          title: 'The Great Migration Pulse',
          content: 'The movement of millions of wildebeest, zebras, and gazelles across the Serengeti-Mara ecosystem is one of nature\'s greatest spectacles. While the herds spend more time in Tanzania, the dramatic river crossings are a staple of the Kenyan Mara.',
          quote: 'The Great Migration isn\'t just an event; it\'s a rhythmic masterpiece of survival that redefines your understanding of the natural world.'
        },
        {
          id: 'tanzanian-landscapes',
          title: 'The Untamed Beauty of Tanzanian Landscapes',
          content: 'From the crater floor of Ngorongoro to the endless plains of the Serengeti, Tanzania offers a visual feast that changes with every mile. The scale here is immense, offering a sense of isolation that is hard to find elsewhere.'
        }
      ],
      recommendedTour: {
        id: 'serengeti-luxury-safari',
        name: 'Serengeti Luxury Safari',
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=600',
        duration: '5 Days',
        price: '$2,400'
      }
    },
    {
      id: 'zanzibar-hidden-gems',
      title: 'Zanzibar: Beyond the White Sand Beaches',
      excerpt: 'Explore the spice markets of Stone Town and the secret turquoise lagoons of the archipelago.',
      content: 'Zanzibar is more than just a beach destination. It is a sensory explosion of cloves, ancient architecture, and turquoise waters that hold secrets of a thousand-year-old trading history.',
      category: 'Beach',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=1200',
      author: 'Sarah Jenkins',
      authorRole: 'Cultural Explorer',
      authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80',
      date: 'May 12, 2026',
      readTime: '10 min',
      tags: ['Zanzibar', 'Culture', 'Island'],
      sections: [
        {
          id: 'stone-town',
          title: 'The Labyrinth of Stone Town',
          content: 'The UNESCO World Heritage site of Stone Town is a maze of narrow alleys and carved wooden doors. Every corner smells of cinnamon and history.',
          quote: 'To walk through Stone Town is to walk through a living museum where the past is present in every coral-stone wall.'
        },
        {
          id: 'spice-tours',
          title: 'The Island of Spices',
          content: 'Venture into the heart of the island where vanilla, nutmeg, and black pepper grow wild. A spice tour is essential to understanding the soul of Zanzibar.'
        },
        {
          id: 'nungwi-sunsets',
          title: 'Sunsets at Nungwi',
          content: 'End your journey at the northern tip of the island. Here, traditional dhow boats sail against a backdrop of the most vivid orange sunsets you will ever witness.'
        }
      ],
      recommendedTour: {
        id: 'zanzibar-spice-island-escape',
        name: 'Spice Island Luxury Escape',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',
        duration: '7 Days',
        price: '$1,850'
      }
    },
    {
      id: 'kilimanjaro-climbing-tips',
      title: 'Conquering the Roof of Africa: A Kilimanjaro Guide',
      excerpt: 'Everything you need to know before stepping foot on the Machame Route.',
      content: 'Standing at 5,895 meters, Mount Kilimanjaro is the tallest free-standing mountain in the world. It is a journey through five distinct ecosystems, from rainforest to arctic desert.',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww',
      author: 'David Mwangi',
      authorRole: 'Expedition Lead',
      authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80',
      date: 'June 20, 2026',
      readTime: '20 min',
      tags: ['Trekking', 'Adventure', 'Mountaineering'],
      sections: [
        {
          id: 'route-selection',
          title: 'Choosing Your Path: Machame vs Lemosho',
          content: 'The Machame route offers steeper climbs and better scenery, while the Lemosho route provides better acclimatization. Your choice dictates your success rate.',
          quote: 'Mount Kilimanjaro does not care about your fitness; it cares about your pace. Pole pole—slowly, slowly.'
        },
        {
          id: 'summit-night',
          title: 'The Mental Battle of Summit Night',
          content: 'Starting at midnight in sub-zero temperatures, the final push to Uhuru Peak is as much a mental challenge as it is physical. The sunrise over the glaciers is your reward.'
        }
      ],
      recommendedTour: {
        id: 'kilimanjaro-summit-trek',
        name: '8-Day Lemosho Trek',
        image: 'https://images.unsplash.com/photo-1623942004271-e40700085437?w=600',
        duration: '8 Days',
        price: '$2,900'
      }
    }
  ]

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: string): Article | undefined {
    return this.articles.find(a => a.id === id);
  }

  // Bonus: Get related articles excluding the current one
  getRelatedArticles(currentId: string, category: string): Article[] {
    return this.articles
      .filter(a => a.category === category && a.id !== currentId)
      .slice(0, 3);
  }
}
