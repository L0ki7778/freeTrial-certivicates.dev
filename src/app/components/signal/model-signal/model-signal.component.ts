import { Component, input, model } from '@angular/core';
import { LetterAnimationDirective } from '../../../directives/letter-animation.directive';

@Component({
  selector: 'databinding-signal',
  imports: [LetterAnimationDirective],
  templateUrl: './model-signal.component.html',
  styleUrl: './model-signal.component.scss'
})
export class ModelSignalComponent {
  input = input.required<string>()

  modelName = model.required<string>()
  modelAge = model(1)

  incrementAge(): void {
    this.modelAge.update((modelAge) => modelAge + 1)
  }

}
