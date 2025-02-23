import { Component, computed, signal, WritableSignal } from '@angular/core';
import { LetterAnimationDirective } from '../../directives/letter-animation.directive';

@Component({
  selector: 'signal',
  imports: [LetterAnimationDirective],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  count: WritableSignal<number> = signal(0);
  computedCount = computed(() => this.count() * 2);

  increment(): number {
    this.count.update((value) => value + 1);
    return this.count();
  }

  consoleCounter(){
    this.computedCount()
    console.log(this.computedCount())
  }
}
