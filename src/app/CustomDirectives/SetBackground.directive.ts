import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackGround implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // by using nativeElement we are able to access the native DOM element. Which is not recommended becuase of 3 Major issue.
    //  1. Angular Keeps the component & view in sync using templates, data binding and change detection etc. All of them are bypassed when we update the DOM directly.
    //  2. The DOM manipulation works only in browsers. You will not be able to use your app in other platforms like mobile devices,web workers, server for SSR, Desktop or apps etc. Where there is no browser.
    //  3. The DOM APIs' does not sanitize the data. Hence it is possible to inject a script, thereby, opening our app an easy target for XSS injection attacks.

    //this.el.nativeElement.style.backgroundColor = 'black';
    //this.el.nativeElement.style.color = 'white';

    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
   // this.renderer.setAttribute(this.el.nativeElement,'title','This is a title');

  }
}
