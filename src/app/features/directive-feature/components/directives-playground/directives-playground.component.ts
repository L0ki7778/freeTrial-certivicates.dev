import { Component, signal } from '@angular/core';
import { HostPracticeDirective } from '../../directives/host-practice.directive';

@Component({
  selector: 'directives-playground',
  imports: [HostPracticeDirective],
  templateUrl: './directives-playground.component.html',
  styleUrl: './directives-playground.component.scss'
})
export class DirectivesPlaygroundComponent {
  activeState = signal(false);
  activeString = signal<string>("False")
  changeState() {
    this.activeState.update(value => !value)
    this.activeState() ? this.activeString.set('True') : this.activeString.set('False')
  }

}
