import { Component, OnInit, Renderer2, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy  {


  toogleMobileMenu = false;

  url = environment.baseUrl;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'bg-light-blue');
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      // window.scrollTo(0, 0);
      this.toogleMobileMenu = false;
    });
    this.followMovement();
    this.setMetaTags();
  }

  setMetaTags(): void {
    this.titleService.setTitle('MagsLeads | Convierte Clicks en Clientes');
    this.metaService.addTag({
      name: 'description',
      content: 'Empieza la relación con tus visitantes con el pie derecho! Integrando mags generarás verdadero valor al público que buscas llegar y ellos volveran, Garantizado!'
    });
    // OG Facebook
    this.metaService.addTag({
      property: 'og:type',
      content: 'website'
    });
    this.metaService.addTag({
      property: 'og:url',
      content: this.url
    });
    this.metaService.addTag({
      property: 'og:title',
      content: 'MagsLeads | Convierte Clicks en Clientes'
    });
    this.metaService.addTag({
      property: 'og:description',
      content: 'Empieza la relación con tus visitantes con el pie derecho! Integrando mags generarás verdadero valor al público que buscas llegar y ellos volveran, Garantizado!'
    });
    this.metaService.addTag({
      property: 'og:image',
      content: 'https://magsleads.com/assets/img/magsleads-min.jpg'
    });
    // OG Twitter
    this.metaService.addTag({
      property: 'twitter:card',
      content: 'summary_large_image'
    });
    this.metaService.addTag({
      property: 'twitter:url',
      content: 'https://magsleads.com/assets/img/magsleads-min.jpg'
    });
    this.metaService.addTag({
      property: 'twitter:title',
      content: 'MagsLeads | Convierte Clicks en Clientes'
    });
    this.metaService.addTag({
      property: 'twitter:description',
      content: 'Empieza la relación con tus visitantes con el pie derecho! Integrando mags generarás verdadero valor al público que buscas llegar y ellos volveran, Garantizado!'
    });
    this.metaService.addTag({
      property: 'twitter:image',
      content: 'https://magsleads.com/assets/img/magsleads-min.jpg'
    });
  }

  toogleMenu(): void {
    this.toogleMobileMenu = true;
  }

  getNews(): void {
    this.router.navigate(['/news/crashpal-dfw']);
  }

  getPrivacy(): void {
    this.router.navigate(['/privacy-policy']);
  }

  getTerms(): void {
    this.router.navigate(['/terms-of-use']);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'bg-light-blue');
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
