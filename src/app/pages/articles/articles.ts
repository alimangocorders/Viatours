import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleService, Article } from '../../services/article.service'; // Adjust path as needed

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './articles.html'
})
export class Articles implements OnInit {
  selectedCategory = 'all';
  searchQuery = '';
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // Fetch articles from the centralized service
    this.articles = this.articleService.getArticles();
  }

  // Logic to separate the "Featured" hero from the rest
  get featuredArticle() {
    // You can add an 'isFeatured' property to your Service Interface
    // or just pick the first one for the hero section
    return this.articles.find(a => a.category.toLowerCase() === 'safari');
  }

  get filteredArticles() {
    return this.articles.filter(article => {
      // 1. Don't show the featured article in the grid if we are on 'all'
      if (this.selectedCategory === 'all' && article.id === this.featuredArticle?.id) {
        return false;
      }

      // 2. Filter by Category
      const matchesCategory = this.selectedCategory === 'all' ||
                              article.category.toLowerCase() === this.selectedCategory.toLowerCase();

      // 3. Filter by Search Query
      const matchesSearch = article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            article.author.toLowerCase().includes(this.searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  onSearch(event: Event) {
    const element = event.target as HTMLInputElement;
    this.searchQuery = element.value;
  }
}
