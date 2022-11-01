import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnChanges, OnInit{
  @Input()
  country:string='';

  @HostBinding("src")
  srcele:string=''

  constructor(private el:ElementRef, private renderer:Renderer2 ) { 
    console.log(this.el.nativeElement)
    console.log(`country const : ${this.country}`)
    renderer.setStyle(el.nativeElement, 'color','green');
  }
  ngOnInit(): void {
    console.log(`country oninit : ${this.country}`)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`country on changes: ${this.country}`)
    this.srcele = `../../assets/images/${this.country}.png`
  }

  @HostListener("mouseover")
  mouseOver()
  {
    this.renderer.setStyle(this.el.nativeElement, 'color','yellow');
  }
  @HostListener("mouseout")
  mouseOut()
  {
    this.renderer.setStyle(this.el.nativeElement, 'color','green  ');
  }
}
