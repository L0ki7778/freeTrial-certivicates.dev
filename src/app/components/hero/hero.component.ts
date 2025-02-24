import { Component } from '@angular/core';
import { Person, PersonList } from '../../interfaces/person';
import { PersonPrefixPipe } from '../../pipes/person-prefix.pipe';
import { LetterAnimationDirective } from '../../directives/letter-animation.directive';
import { NgToolsComponent } from '../ng-tools/ng-tools.component';

@Component({
  selector: 'app-hero',
  imports: [
    LetterAnimationDirective,
    PersonPrefixPipe,
    NgToolsComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements PersonList {
  persons: Array<Person> = [
    { gender: 'male', firstName: 'John', lastName: 'Smith' },
    { gender: 'female', firstName: 'John', lastName: 'Smith' },
    { gender: 'female', firstName: 'John', lastName: 'Smith' },
    { gender: 'male', firstName: 'John', lastName: 'Smith' },
    { gender: 'male', firstName: 'John', lastName: 'Smith' },
  ];

  

  
}
