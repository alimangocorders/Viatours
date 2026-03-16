import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {


    features = [
    {
      id: 1,
      title: 'Kenya vs Tanzania Safari: The Better African Safari Experience',
      date: 'April 06 2023',
      author: 'By Ali Tufan',
      badge: 'Trips',
            image: 'article-1.png',
      alt: 'article 1',
    },
    {
      id: 2,
      title: 'Exploring the Serengeti: A Wildlife Adventure',
      date: 'April 07 2023',
      author: 'By Emily Johnson',
      badge: 'Trips',
            image: 'article-2.png',
      alt: 'article 2',
    },
    {
      id: 3,
      title: 'Into the Wild: An Unforgettable Safari Journey',
      date: 'April 08 2023',
      author: 'By Maxwell Rhodes',
      badge: 'Trips',
      image: 'article-3.png',
      alt: 'article 3',
    },
  ];

}
