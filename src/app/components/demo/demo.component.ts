import { Component } from '@angular/core';
import { DemoPipe } from '../../pipes/demo.pipe';


@Component({
  selector: 'app-demo',
  imports: [DemoPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  firstString = "John";
  secondString = "Smith";

}
