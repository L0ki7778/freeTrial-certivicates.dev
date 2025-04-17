import { Component, output } from '@angular/core';

import { LetterAnimationDirective } from '../../directives/letter-animation.directive';

@Component({
  selector: 'output',
  imports: [LetterAnimationDirective],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
})
export class OutputComponent {
  counter = 0;
  changed = output<number>({ alias: 'addedClick' });

  emitEventAndCounter() {
    this.counter +=1
    console.log(this.counter)
    this.changed.emit(this.counter)
  }
}
