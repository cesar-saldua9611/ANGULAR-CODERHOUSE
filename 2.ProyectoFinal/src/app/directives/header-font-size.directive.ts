import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaderFontSize]'
})
export class HeaderFontSizeDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { 
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', 'bold');
  }

}
