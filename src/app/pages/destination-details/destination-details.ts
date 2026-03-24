import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-details',
  imports: [],
  templateUrl: './destination-details.html',
  styleUrl: './destination-details.css',
})
export class DestinationDetails {


  popularTours = [
    {
      id: 1,
      title: 'Santorini Sunset Cruise with Dinner',
      image: 'tour-1.jpg',
      price: 189,
      duration: '5 Hours',
      type: 'Group Tour'
    },
    {
      id: 2,
      title: 'Private Wine Tasting & Vineyard Tour',
      image: 'tour-2.jpg',
      price: 145,
      duration: '6 Hours',
      type: 'Private'
    },
    {
      id: 3,
      title: 'Ancient Akrotiri & Volcanic Beaches',
      image: 'tour-3.jpg',
      price: 225,
      duration: '8 Hours',
      type: 'Full Day'
    }
  ];

  highlights = [
    {
      id: 1,
      title: 'Iconic sunset views in Oia',
    },
      {
      id: 2,
      title: 'Ancient ruins of Akrotiri',
    },
      {
      id: 3,
      title: 'Beautiful volcanic beaches',
    },
      {
      id: 4,
      title: 'World-class wineries',
    },
      {
      id: 5,
      title: 'Traditional Greek cuisine',
    },
      {
      id: 6,
      title: 'Crystal-clear Aegean waters',
    }
  ]


  Activities=[
    {
       id: 1,
      title: 'Photography',
      text:'Capture stunning views',
      icon: 'ri-camera-line'
    },

        {
       id: 2,
      title: 'Cuisine',
      text:'Greek culinary delights',
      icon: 'ri-restaurant-line'
    },

        {
       id: 3,
      title: 'Hiking',
      text:'Scenic coastal trails',
      icon: 'ri-earth-line'
    },

        {
       id: 4,
      title: 'Island Hopping',
      text:'Explore nearby islands',
      icon: 'ri-plane-fill'
    },

  ]

  constructor() {}

  ngOnInit(): void {
    // Logic to fetch destination details would go here
  }

}
