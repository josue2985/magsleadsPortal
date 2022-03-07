import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-catalog-items',
  templateUrl: './cta-catalog-items.component.html',
  styleUrls: ['./cta-catalog-items.component.scss']
})
export class CtaCatalogItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.followMovement();
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
