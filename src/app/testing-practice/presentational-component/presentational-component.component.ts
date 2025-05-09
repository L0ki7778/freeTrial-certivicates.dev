import { Component, input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card',
  imports: [CommonModule],
  templateUrl: './presentational-component.component.html',
  styleUrl: './presentational-component.component.scss'
})
export class PresentationalComponentComponent {
  pokemon = input.required<any>()
  ngOnInit() {
    console.log(this.pokemon())
  }

}
