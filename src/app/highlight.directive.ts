import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() highLightColor:string = "";
  constructor( private el: ElementRef) {
    console.log('inside the custom directive')
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.hightLight(this.highLightColor || "yellow")
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.hightLight("")
   }

   private hightLight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
   }
}
