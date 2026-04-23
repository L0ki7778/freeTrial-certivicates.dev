import { Component, inject, OnInit } from '@angular/core';
import { PokeService } from '../../services/pokemon/pokemon-service';
import { map, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PresentationalComponentComponent } from '../pokemon-presentational/presentational-component.component';

@Component({
  selector: 'app-container-component',
  imports: [PresentationalComponentComponent, AsyncPipe],
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.scss']
})
export class ContainerComponentComponent implements OnInit {
  httpService = inject(PokeService);

  pokeDetails$: Observable<any[]> = this.httpService.pokeDetails$;

  constructor() { }

  ngOnInit() {
    this.httpService.loadPokemon();
    this.pokeDetails$ = this.httpService.pokeDetails$.pipe(
      map(pokeDetails => { return pokeDetails.sort((a, b) => a.id - b.id) })
    );
  }
}
