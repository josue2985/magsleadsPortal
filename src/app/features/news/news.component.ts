import * as _ from 'lodash';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { INews, NewsService } from '../../shared/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {
  news: INews[];
  private fragment: string;
  sectionTitle: string;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.sectionTitle = 'News & Media';

    this.newsService.getNews().then( news => {
      this.news = news;
    });

    this.route.queryParams.subscribe(params => {
      const newsName = this.route.snapshot.paramMap.get('newsName');
      if (newsName) {
        this.viewportScroller.scrollToAnchor(newsName);
      }
    });
  }
  ngAfterViewInit(): void {
    // try {
    //   document.querySelector('#' + this.fragment).scrollIntoView();
    // } catch (e) { }
  }
}
