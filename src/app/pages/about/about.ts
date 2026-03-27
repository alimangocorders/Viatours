import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

interface Stat {
  value: string;
  label: string;
  icon: string;
}

interface ValueProp {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [RouterLink]
})
export class About {
  public stats: Stat[] = [
    { value: '12+', label: 'Years of Experience', icon: 'ri-star-line' },
    { value: '240+', label: 'Destinations Worldwide', icon: 'ri-map-pin-line' },
    { value: '92K+', label: 'Happy Travelers', icon: 'ri-heart-line' },
    { value: '4.9', label: 'Average Rating', icon: 'ri-star-fill' },
  ];

  public values: ValueProp[] = [
    {
      icon: 'ri-heart-3-line',
      title: 'Passion for Travel',
      desc: 'Every journey we craft comes from our deep love for exploration and cultural discovery.',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Trust & Safety',
      desc: 'Your safety is our priority. We vet every partner to ensure complete peace of mind.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: 'ri-sparkling-2-line',
      title: 'Unforgettable Moments',
      desc: 'We design experiences that go beyond sightseeing — creating memories that last a lifetime.',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: 'ri-global-line',
      title: 'Sustainable Tourism',
      desc: "We're committed to responsible travel that respects local communities and preserves nature.",
      color: 'bg-blue-50 text-blue-600',
    },
  ];

  public milestones = [
    { year: '2014', event: 'Founded with a mission to make travel personal and meaningful' },
    { year: '2016', event: 'Expanded to 50+ destinations across 4 continents' },
    { year: '2019', event: 'Reached 50,000 happy travelers worldwide' },
    { year: '2022', event: 'Launched sustainable tourism initiatives' },
  ];

  public testimonials = [
    { text: "Viatours turned our honeymoon into an absolute fairy tale. Every detail was perfect.", author: "Emily & Mark R.", trip: "Santorini, Greece" },
    { text: "The team's local knowledge made our Japan trip feel like an insider experience.", author: "David Chen", trip: "Kyoto, Japan" },
    { text: "Professional, caring, and incredibly creative. I've booked 4 trips now!", author: "Amara Obi", trip: "Marrakech, Morocco" },
  ];
}
