import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFullPage]'
})
export class FullPageDirective {
  constructor(private element: ElementRef) {

  }
  resize() {
    const bgwidth = this.element.nativeElement.width;
    const bgheight = this.element.nativeElement.height;

    const winwidth = window.innerWidth;
    const winheight = window.innerHeight;

    const widthratio = winwidth / bgwidth;
    const heightratio = winheight / bgheight;

    const widthdiff = heightratio * bgwidth;
    const heightdiff = widthratio * bgheight;

    if (heightdiff > winheight) {
      this.element.nativeElement.width = winwidth;
      this.element.nativeElement.height = heightdiff;
    } else {
      this.element.nativeElement.width = widthdiff;
      this.element.nativeElement.height = winheight;
    }
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.resize();
  }
  @HostListener('load',['$event'])
    onLoad(event) {
    this.resize();
  }
}
