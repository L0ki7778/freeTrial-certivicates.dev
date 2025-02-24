import { Directive, ElementRef, HostBinding, HostListener, input, Renderer2 } from '@angular/core';

@Directive({
    selector: 'button:not([disableIsActive]),[isActive]',
    standalone: false
})
export class LetterAnimationDirective {

 constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '5px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'fontFamily', 'Cursive');
  }

  @HostBinding('class.yellow')
  yellow = input(false);

  ngAfterViewInit() {
    const text = this.el.nativeElement.innerText;
    this.el.nativeElement.innerHTML = ''; 
    const fragment = this.createLetterAnimation(text);
    this.renderer.appendChild(this.el.nativeElement, fragment);
  }

  createLetterAnimation(text: string): DocumentFragment {
    const fragment = document.createDocumentFragment();

    text.split('').forEach((letter, index) => {
      const span = this.renderer.createElement('span');
      this.renderer.addClass(span, 'spin-letter');
      this.renderer.setStyle(span, 'display', 'inline-block');
      this.renderer.setStyle(span, 'transition', 'transform 0.5s ease');
      this.renderer.setStyle(span, 'transitionDelay', `${index * 50}ms`);
      this.renderer.setProperty(span, 'innerText', letter);
      this.renderer.appendChild(fragment, span);
    });

    return fragment;
  }


  @HostListener('mouseenter') onMouseEnter() {
    if(this.yellow()){

      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'orange');
    }
    else{
      this.renderer.setStyle(this.el.nativeElement, 'background', 'blue');
    }
    this.renderer.setStyle(this.el.nativeElement, 'fontFamily', 'Arial');
    
    const spans = this.el.nativeElement.querySelectorAll('.spin-letter');
    spans.forEach((span: HTMLElement) => {
      this.renderer.setStyle(span, 'transform', 'rotate(360deg)');
    });
  }

  @HostListener('mouseleave') onMouseLeave() {
    const spans = this.el.nativeElement.querySelectorAll('.spin-letter');
    spans.forEach((span: HTMLElement) => {
      this.renderer.setStyle(span, 'transform', 'rotate(0deg)');
    });
  }

}
