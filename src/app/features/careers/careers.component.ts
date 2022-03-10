import * as _ from 'lodash';
import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { ICareers, CareersService } from '../../shared/services/careers.service';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit, AfterViewInit {

  careers: ICareers[];
  private fragment: string;
  sectionTitle: string;

  constructor(
    private careersService: CareersService,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    this.sectionTitle = 'Careers';

    this.careersService.getCareers().then( careers => {
      this.careers = careers;
    });

    this.route.queryParams.subscribe(params => {
      const careersName = this.route.snapshot.paramMap.get('careersName');
      if (careersName) {
        this.viewportScroller.scrollToAnchor(careersName);
      }
    });
  }

  onApply(position: string): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = 'mailto: hola@magsleads.com?subject=' + position + ' Job Inquiry';
    }
  }

  ngAfterViewInit(): void {
    // try {
    //   document.querySelector('#' + this.fragment).scrollIntoView();
    // } catch (e) { }
  }

}
