import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') OnMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight-product');
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight-product');
  }
}
