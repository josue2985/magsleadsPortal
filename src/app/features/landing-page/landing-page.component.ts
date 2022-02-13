import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ICalcs, CatalogService } from '../../shared/services/catalog.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy  {

  catalog: ICalcs[];

  toogleMobileMenu = false;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private catalogService: CatalogService,
  ) { }

  ngOnInit(): void {
    this.catalogService.getCatalog().then( calcs => {
      this.catalog = calcs;
      console.log(this.catalog);
    });
    this.renderer.addClass(document.body, 'bg-light-blue');
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      // window.scrollTo(0, 0);
      this.toogleMobileMenu = false;
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
    this.renderer.removeClass(document.body, 'bg-light-blue');
  }

}
