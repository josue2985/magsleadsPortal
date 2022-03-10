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

  showEmbedModal: boolean;

  iframeCode = '<iframe src="https://magsleads.com/calculadora-imc" name="MagsLeads - Calculadora IMC" scrolling="Yes" height="800px" width="100%" style="border: none;"></iframe>';

  isCopied: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catalogService: CatalogService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    this.showEmbedModal = false;
    this.isCopied = false;
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

  embedThis(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
      const body = document.getElementById('body');
      body?.classList.add('no-scroll');
    }
    this.showEmbedModal = true;
  }

  onDismiss(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showEmbedModal = false;
      const body = document.getElementById('body');
      if (body?.classList.contains('no-scroll')) {
        body?.classList.remove('no-scroll');
      }
    }
  }

  copy(value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isCopied = true;
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = value;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      if ( this.isCopied === true) {
        setTimeout(() => { this.isCopied = false; }, 2000);
      }
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
