import { Component, input } from '@angular/core';
import { DemoPipe } from '../../pipes/demo.pipe';
import { Person } from '../../interfaces/person';


@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  person = input.required<Person>()
}
