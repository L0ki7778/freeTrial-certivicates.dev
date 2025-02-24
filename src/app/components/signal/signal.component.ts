import { ChangeDetectionStrategy, Component, computed, effect,Signal, signal, WritableSignal } from '@angular/core';
import { LetterAnimationDirective } from '../../directives/letter-animation.directive';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'signal',
  imports: [LetterAnimationDirective, AsyncPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  count: WritableSignal<number> = signal(0); // writable

  computedCount = computed(() => {
    if (this.showCount()) {
      return this.count() * 2
    } else {
      return "nothing to see"
    }
  }); //not writable with constant logic but relative to this.count
  //value of computed will change according to relative linked logic-->count changes, so computedCount changes

  showCount = signal<boolean>(false) //added boolean signal for conditioning computing (computed Signal condition)
  effectRef = ''

  count$ = toObservable(this.count)
  counterSignal: Signal<number|undefined>=toSignal(this.count$)


  constructor() {
    effect(() => {
      this.effectRef = ""
      this.effectRef = `${this.effectRef} was triggered ${this.count()} times.`
      console.log(this.effectRef)
      console.log(this.count$)

    })

  }

  increment(): number {
    this.count.update((value) => value + 1);
    console.log(this.computedCount(), "after increment")
    this.showCount.set(true)
    return this.count();
  }


  consoleCounter() {
    this.computedCount()
    console.log(this.computedCount())
  }
}
