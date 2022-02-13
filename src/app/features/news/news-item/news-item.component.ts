import { Component, OnInit } from '@angular/core';
import { NewsService, INews } from '../../../shared/services/news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  newsName: any;
  news: INews;
  sectionTitle: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.sectionTitle = 'News & Media';

    this.newsName = this.route.snapshot.paramMap.get('newsName');
    this.newsService.get(this.newsName).then(result => {
      this.news = result;
      if (!this.news) {
        //  this.router.navigate(['/page-not-found']);
        // console.log(this.newsName);
        // console.log(this.news);
      }
    });
  }

}
