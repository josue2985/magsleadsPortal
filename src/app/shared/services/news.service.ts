import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getNews(): Promise<any> {
    return this.http.get('/assets/data/news.data.json').toPromise();
  }

  get(newsName: string): Promise<any> {
    const promise = new Promise(resolve => {
       this.getNews().then(result => {
          const news = result.filter((r: any) => r.path.toLowerCase() === newsName.toLowerCase());
          if (news.length > 0) {
            resolve(news[0]);
          } else {
            resolve(null);
          }
      });
    });
    return promise;
  }

}

export interface INews {
  name: string;
  isInternal: boolean;
  path: string;
  srcType: string;
  src: string;
  headline: string;
  byline: string;
  author: string;
  date: string;
  content: string;
  filter(arg0: (n: any) => boolean): INews;
}

