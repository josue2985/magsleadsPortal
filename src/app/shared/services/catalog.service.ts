import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http: HttpClient
  ) { }

  getCatalog(): Promise<any> {
    return this.http.get('/assets/data/catalog.data.json').toPromise();
  }

  get(calcName: string): Promise<any> {
    const promise = new Promise(resolve => {
       this.getCatalog().then(result => {
          const calculators = result.filter((r: any) => r.path.toLowerCase() === calcName.toLowerCase());
          if (calculators.length > 0) {
            resolve(calculators[0]);
          } else {
            resolve(null);
          }
      });
    });
    return promise;
  }

}

export interface ICalcs {
  name: string;
  isInternal: boolean;
  category: string;
  path: string;
  src: string;
  headline: string;
  byline: string;
  author: string;
  date: string;
  content: string;
  isPrivate: boolean;
  countViews: number;
  countLikes: number;
  filter(arg0: (n: any) => boolean): ICalcs;
}
