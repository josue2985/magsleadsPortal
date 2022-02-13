import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent implements OnInit {
  sectionTitle: string;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.sectionTitle = 'Terms of Use';
  }

}
