import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy  {


  toogleMobileMenu = false;

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
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
