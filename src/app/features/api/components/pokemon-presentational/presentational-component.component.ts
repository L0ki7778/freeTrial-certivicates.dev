import { Component, input } from '@angular/core';

import { Pokemon } from '../../../../interfaces/pokemon';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './presentational-component.component.html',
  styleUrl: './presentational-component.component.scss'
})
export class PresentationalComponentComponent {
  pokemon = input.required<Pokemon>()
  ngOnInit() {
    console.log(this.pokemon())
  }

}
