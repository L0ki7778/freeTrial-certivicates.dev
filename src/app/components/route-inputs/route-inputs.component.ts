import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route-inputs',
  imports: [],
  templateUrl: './route-inputs.component.html',
  styleUrl: './route-inputs.component.scss'
})
export class RouteInputsComponent {

  @Input()
  id!: string

  @Input()
  data!: string

  @Input()
  test!: string

}
