import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeaderDirective } from '../../directives/header.directive';

@Component({
  selector: 'app-hero',
  imports: [FooterComponent, HeaderComponent,HeaderDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
