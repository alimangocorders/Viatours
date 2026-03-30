import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  features = [
    {
      id: 'safari-comparison', // Matches the ID in ArticleService
      title: 'Kenya vs Tanzania Safari: The Better African Safari Experience',
      date: 'April 06 2026',
      author: 'By Ali Tufan',
      badge: 'Trips',
      image: 'article-1.png',
      alt: 'article 1',
    },
    {
      id: 'zanzibar-hidden-gems',
      title: 'Zanzibar: Beyond the White Sand Beaches',
      date: 'April 07 2026',
      author: 'By Emily Johnson',
      badge: 'Trips',
      image: 'article-2.png',
      alt: 'article 2',
    },
    {
      id: 'kilimanjaro-climbing-tips',
      title: 'Conquering the Roof of Africa: A Kilimanjaro Guide',
      date: 'April 08 2026',
      author: 'By Maxwell Rhodes',
      badge: 'Trips',
      image: 'article-3.png',
      alt: 'article 3',
    },
  ];
}
