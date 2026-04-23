import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostPractice]' //Der Setter im Input wird durch den Selektor referenziert
})
export class HostPracticeDirective {


  @HostBinding('class.yellow-bg')
  protected yellowBg = true

  @HostBinding('attr.disabled')
  protected disabled = false//beim Test gerne ein btn nutzen :)

  @HostBinding('class.isActive')
  protected _isActive = true 

  @Input()
  set appHostPractice(value: boolean) {//hier wird durch einen Input festgelegt, ob die Attribut-Direktive true oder false ist

    this.disabled = !value;
    this.yellowBg = value;
  }

  @HostListener('mouseenter')
  setPurple() {
    this._isActive = true
  }

  @HostListener('mouseleave')
  takePurple() {
    this._isActive = false
  }
}

