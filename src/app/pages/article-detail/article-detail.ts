import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService, Article } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-detail.html'
})
export class ArticleDetail implements OnInit {
  article?: Article;
  activeFragment: string = '';

  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.article = this.articleService.getArticleById(id);
      }
    });

    this.route.fragment.subscribe(frag => {
      this.activeFragment = frag || '';
    });
  }

  // --- ADD THIS FUNCTION HERE ---
  shareArticle() {
    if (!this.article) return;

    // Check if the browser supports the Web Share API (Mobile/Safari)
    if (navigator.share) {
      navigator.share({
        title: this.article.title,
        text: `Check out this article: ${this.article.title}`,
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback: Copy link to clipboard for Desktop/Chrome
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard! You can now paste and share it.');
    }
  }
}
