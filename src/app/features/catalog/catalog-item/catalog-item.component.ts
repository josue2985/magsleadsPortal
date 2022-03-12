import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ICalcs, CatalogService, IMetaTagsPage } from '../../../shared/services/catalog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from 'lodash';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

  calculatorName: any;
  calculator: ICalcs;
  headerColor: any;

  metaTagsInfo: IMetaTagsPage;

  showEmbedModal: boolean;

  urlCalculator: any;

  urlCalcMetaTags = environment.baseUrl + 'calculadora/';

  isCopied: boolean;

  iframeCode: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catalogService: CatalogService,
    @Inject(PLATFORM_ID) private platformId: any,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.showEmbedModal = false;
    this.isCopied = false;
    this.calculatorName = this.route.snapshot.paramMap.get('calculatorName');
    this.catalogService.get(this.calculatorName).then(result => {
      this.calculator = result;
      this.setHeaderColors();
      this.setMetaTags();
      if (!this.calculator) {
         // this.router.navigate(['/page-not-found']);
      }
    });
    this.urlCalculator = environment.baseUrl + 'calculadora/' + this.calculatorName;
    this.followMovement();
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

  setMetaTags(): void {
    const metaTags = this.calculator.metaTagsPage;
    metaTags.forEach((results: any) => {
      this.metaTagsInfo = results;
      // Page title
      this.titleService.setTitle(this.metaTagsInfo.titleContent);
      // Page Description
      this.metaService.addTag({
        name: 'description',
        content: this.metaTagsInfo.descripContent
      });
      // OG Facebook
      this.metaService.addTag({
        property: 'og:type',
        content: 'website'
      });
      this.metaService.addTag({
        property: 'og:url',
        content: this.urlCalcMetaTags + this.calculatorName
      });
      this.metaService.addTag({
        property: 'og:title',
        content: this.metaTagsInfo.titleContent
      });
      this.metaService.addTag({
        property: 'og:description',
        content: this.metaTagsInfo.descripContent
      });
      this.metaService.addTag({
        property: 'og:image',
        content: this.metaTagsInfo.pictureUrl
      });
      // OG Twitter
      this.metaService.addTag({
        property: 'twitter:card',
        content: 'summary_large_image'
      });
      this.metaService.addTag({
        property: 'twitter:url',
        content: this.urlCalcMetaTags + this.calculatorName
      });
      this.metaService.addTag({
        property: 'twitter:title',
        content: this.metaTagsInfo.titleContent
      });
      this.metaService.addTag({
        property: 'twitter:description',
        content: this.metaTagsInfo.descripContent
      });
      this.metaService.addTag({
        property: 'twitter:image',
        content: this.metaTagsInfo.pictureUrl
      });
    });
  }

  setHeaderColors(): void {
    switch (this.calculatorName) {
      case 'calculadora-imc':
        this.headerColor = 'imc';
        break;
      case 'calculadora-agua':
        this.headerColor = 'agua';
        break;
      default:
        this.headerColor = 'error-color';
        break;
    }
  }

  embedThis(): void {
    this.iframeCode = `<iframe src="https://magsleads.com/${this.calculatorName}" name="${this.calculatorName}" scrolling="Yes" height="800px" width="100%" style="border: none;"></iframe>`;
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
