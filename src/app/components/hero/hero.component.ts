import { Component, computed, signal } from '@angular/core';
import { Person, PersonList } from '../../interfaces/person';
import { PersonPrefixPipe } from '../../pipes/person-prefix.pipe';
import { LetterAnimationDirective } from '../../directives/letter-animation.directive';
import { NgToolsComponent } from '../ng-tools/ng-tools.component';
import { StateButtonComponent } from '../state-button/state-button.component';

@Component({
  selector: 'app-hero',
  imports: [
    LetterAnimationDirective,
    PersonPrefixPipe,
    NgToolsComponent,
    StateButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements PersonList {

  displayTemplate = signal<boolean>(false);
  changeDisplay() {
    if (this.displayTemplate() === true) {
      return this.displayTemplate.set(false)
    } this.displayTemplate.set(true)
  }



  persons: Array<Person> = [
    { gender: 'male', firstName: 'John', lastName: 'Smith' },
    { gender: 'female', firstName: 'John', lastName: 'Smith' },
    { gender: 'female', firstName: 'John', lastName: 'Smith' },
    { gender: 'male', firstName: 'John', lastName: 'Smith' },
    { gender: 'male', firstName: 'John', lastName: 'Smith' },
  ];




}
