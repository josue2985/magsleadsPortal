import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLength]'
})
export class MaxLengthDirective {
  @Input() appMaxLength: any;
  constructor() {}

  @HostListener('keydown', ['$event']) onKeydown(event: any) {
    const value = event.target.value;
    const maxLength = parseInt(this.appMaxLength);
    const keycode = event.which || event.keycode;
    const allowedKeycodes = [8, 13, 46, 37, 38, 39, 40];
    const keyCodeIndex = allowedKeycodes.indexOf(keycode);
    if ((value.length > maxLength - 1) && (keyCodeIndex === -1)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}