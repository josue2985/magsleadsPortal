import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  sectionTitle: string;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.sectionTitle = 'Policy Privacy';
  }

}