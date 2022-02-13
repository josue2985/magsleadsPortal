import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CareersService {

  constructor(
    private http: HttpClient
  ) { }

  getCareers(): Promise<any> {
    return this.http.get('/assets/data/careers.data.json').toPromise();
  }

  get(careersName: string): Promise<any> {
    const promise = new Promise(resolve => {
       this.getCareers().then(result => {
          const career = result.filter((r: any) => r.path.toLowerCase() === careersName.toLowerCase());
          if (career.length > 0) {
            resolve(career[0]);
          } else {
            resolve(null);
          }
      });
    });
    return promise;
  }
}


export interface ICareers {
  position: string;
  path: string;
  banner: string;
  descriptionShort: string;
  description: string;
  requirementsShort: string;
  requirementColumns: [ICareerRequirementColumns];
}

export interface ICareerRequirementColumns {
  items: [ICareerRequirements];
}

export interface ICareerRequirements {
  title: string;
  subtitle: string;
  content: [ICareerRequirementContent];
}

export interface ICareerRequirementContent {
  item: string;
  subItem: string;
}

