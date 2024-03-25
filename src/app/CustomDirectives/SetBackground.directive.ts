import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackGround implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.el.nativeElement.style.backgroundColor = 'black';
    this.el.nativeElement.style.color = 'white';
  }
}
