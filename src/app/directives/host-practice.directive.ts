import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostPractice]' //Der Setter im Input wird durch den Selektor referenziert
})
export class HostPracticeDirective {

  constructor() { }

  @HostBinding('class.yellow-bg')
  private yellowBg = true

  @HostBinding('disabled')
  private disabled = false//beim Test gerne ein btn nutzen :)

  @HostBinding('class.isActive')
  private _isActive = true

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

