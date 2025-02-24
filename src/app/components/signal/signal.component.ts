import { ChangeDetectionStrategy, Component, computed, effect,OnInit,Signal, signal, viewChild, WritableSignal } from '@angular/core';
import { LetterAnimationDirective } from '../../directives/letter-animation.directive';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { ModelSignalComponent } from './model-signal/model-signal.component';

@Component({
  selector: 'signal',
  imports: [LetterAnimationDirective, AsyncPipe,ModelSignalComponent],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent implements OnInit {
  count: WritableSignal<number> = signal(0); // writable
  //not writable with constant logic but relative to this.count
  //value of computed will change according to relative linked logic-->count changes, so computedCount changes
  computedCount = computed(() => {
    if (this.showCount()) {
      return this.count() * 2
    } else {
      return "nothing to see"
    }
  }); 

  showCount = signal<boolean>(false); //added boolean signal for conditioning computing (computed Signal condition)
  effectRef = '';

  count$ = toObservable(this.count);
  counterSignal: Signal<number|undefined>=toSignal(this.count$);

  //grants access to the component and all of it's properties!!!!
  private modelComponent = viewChild(ModelSignalComponent)

  name='Angular';
  age=21;

  constructor() {
    effect(() => {
      this.effectRef = ""
      this.effectRef = `${this.effectRef} was triggered ${this.count()} times.`
    })

  }

  ngOnInit(): void {
  }

  increment(): number {
    this.count.update((value) => value + 1);
    this.showCount.set(true)
    return this.count();
  }


  consoleCounter() {
    this.computedCount()
  }
}
