import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations'
import { transform } from 'lodash';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [
    trigger('enterTrigger', [
    state('fadeIn', style({
        opacity: '1',
        transform: 'translateX(0%)'
    })),
    transition('void => *', [style({opacity: '0', transform: 'translateX(-50%)'}), animate('500ms')])
    ])
  ]
})
export class LoginPageComponent implements OnInit {

  userId = 101;

  constructor() { }

  ngOnInit(): void {
  }

  change(): void {
    this.userId = 102;
  }

}
