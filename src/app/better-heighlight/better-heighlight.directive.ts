import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input  } from '@angular/core';

@Directive({
  selector: '[appBetterHeighlight]'
})
export class BetterHeighlightDirective implements OnInit {

  @Input() defaultColor: string = "green";
  @Input('appBetterHeighlight') highlightColor: string = "blue";

  @HostBinding('style.backgroundColor') backgroundColor: string ;

  constructor(private elRef : ElementRef ,private renderer : Renderer2) { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','green');
    this.backgroundColor = this.highlightColor;
  }

}
