import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { ICareers, CareersService } from '../../../shared/services/careers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-careers-item',
  templateUrl: './careers-item.component.html',
  styleUrls: ['./careers-item.component.scss']
})
export class CareersItemComponent implements OnInit {

  careerName: any;
  career: ICareers;
  sectionTitle: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private careersService: CareersService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    this.sectionTitle = 'Careers';

    this.careerName = this.route.snapshot.paramMap.get('careerName');
    this.careersService.get(this.careerName).then(result => {
      this.career = result;
      if (!this.career) {
         // this.router.navigate(['/page-not-found']);
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/careers']);
  }

  onApply(): void {
    if (isPlatformBrowser(this.platformId)) { 
      window.location.href = 'mailto: info@seeyamobile.com?subject=' + this.career.position + ' Job Inquiry';
    }
  }

}
