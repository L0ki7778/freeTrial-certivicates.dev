import { Component, computed, signal } from '@angular/core';
import { Person, PersonList } from '../../interfaces/person';
import { PersonPrefixPipe } from '../../pipes/person-prefix.pipe';
import { LetterAnimationDirective } from '../../features/directive-feature/directives/letter-animation.directive';
import { NgToolsComponent } from '../../features/ng-tools/components/ng-tools/ng-tools.component';
import { StateButtonComponent } from '../../features/ng-tools/components/state-button/state-button.component';
import { FormsModule} from '@angular/forms'; //--> 20 Sachen im Modul

@Component({
  selector: 'app-hero',
  imports: [
    LetterAnimationDirective,
    PersonPrefixPipe,
    NgToolsComponent,
    StateButtonComponent,
    FormsModule
    
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements PersonList {

  displayTemplate = signal<boolean>(false);
  changeDisplay() {
    console.log(HeroComponent)
    if (this.displayTemplate() === true) {
      return this.displayTemplate.set(false)
    } this.displayTemplate.set(true)
  }



  persons: Array<Person> = [
    { gender: 'male', firstName: 'John', lastName: 'Smith' },
    { gender: 'female', firstName: 'Johana', lastName: 'Smith' },
    { gender: 'female', firstName: 'John', lastName: 'Smith' },
    { gender: 'male', firstName: 'John', lastName: 'Smith' },
    { gender: 'male', firstName: 'John', lastName: 'Smith' },
  ];

  




}
