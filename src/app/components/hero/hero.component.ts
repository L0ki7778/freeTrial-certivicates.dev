import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeaderDirective } from '../../directives/header.directive';
import { Person, PersonList } from '../../interfaces/person';
import { PersonPrefixPipe } from '../../pipes/person-prefix.pipe';
import { LetterAnimationDirective } from '../../directives/letter-animation.directive';

@Component({
  selector: 'app-hero',
  imports: [FooterComponent, HeaderComponent, LetterAnimationDirective, PersonPrefixPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements PersonList {
  persons:Array<Person> = [
    { gender: 'male', firstName: 'John', lastName: "Smith" },
    { gender: 'female', firstName: 'John', lastName: "Smith" },
    { gender: 'female', firstName: 'John', lastName: "Smith" },
    { gender: 'male', firstName: 'John', lastName: "Smith" },
    { gender: 'male', firstName: 'John', lastName: "Smith" },
  ];
}
