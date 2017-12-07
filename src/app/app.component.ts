import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('angular 2', 'http://angular.io, 2', 3),
      new Article('fullstack', 'http://fullstack.io', 2),
      new Article('angular homepage', 'http://angual.io')
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
