import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  sectionTitle!: string;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.sectionTitle = 'About Us';
  }

}
