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
    this.followMovement();
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

  followMovement(): void {
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
