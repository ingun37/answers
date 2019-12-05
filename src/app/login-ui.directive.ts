import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLoginUI]'
})
export class LoginUIDirective {

  constructor(el: ElementRef) {
  }

}
