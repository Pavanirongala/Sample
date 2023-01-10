import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.style.border = "2px solid red";
  }
}
