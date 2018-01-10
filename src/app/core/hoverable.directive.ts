import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

export const STYLE_CLASS = 'hoverState';

@Directive({
  selector: '[cuiHoverable]'
})
export class HoverableDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, STYLE_CLASS);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, STYLE_CLASS);
  }
}
