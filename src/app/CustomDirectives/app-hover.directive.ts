import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282B';

  @HostBinding('style.color') color: string = 'white';

  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor = 'white';
    this.color = '#28282B';
    this.border = '3px solid #28282B';
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.backgroundColor = '#28282B';
    this.color = 'white';
    this.border = 'none';
  }
}
