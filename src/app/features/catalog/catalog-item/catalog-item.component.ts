import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ICalcs, CatalogService } from '../../../shared/services/catalog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from 'lodash';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

  calculatorName: any;
  calculator: ICalcs;
  headerColor: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catalogService: CatalogService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    this.calculatorName = this.route.snapshot.paramMap.get('calculatorName');
    this.catalogService.get(this.calculatorName).then(result => {
      this.calculator = result;
      this.setHeaderColors();
      if (!this.calculator) {
         // this.router.navigate(['/page-not-found']);
      }
    });
    this.followMovement();
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

  setHeaderColors(): void {
    if (this.calculatorName === 'calculadora-imc') {
      this.headerColor = 'beige';
    } else {
      this.headerColor = 'error-color';
    }
}

followMovement(): void {
  if (isPlatformBrowser(this.platformId)) {
    const elements3d = document.querySelectorAll<HTMLElement>('.follow-mouse');
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX * -50 / window.innerWidth + 'px';
      const y = e.clientY * -50 / window.innerHeight + 'px';

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < elements3d.length; i++) {
        elements3d[i].style.left = x;
        elements3d[i].style.top = y;
      }
    });
  }
}
}
