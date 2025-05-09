import { Component, inject, OnInit } from '@angular/core';
import { TestDemoService } from '../service/test-demo.service';
import { map, Observable, of } from 'rxjs';
import { PresentationalComponentComponent } from '../presentational-component/presentational-component.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-container-component',
  imports: [PresentationalComponentComponent, AsyncPipe],
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.scss']
})
export class ContainerComponentComponent implements OnInit {
  httpService = inject(TestDemoService);

  pokeDetails$: Observable<any[]> = this.httpService.pokeDetails$;

  constructor() { }

  ngOnInit() {
    this.httpService.loadPokemon();
    this.pokeDetails$ = this.httpService.pokeDetails$.pipe(
      map(pokeDetails => { return pokeDetails.sort((a, b) => a.id - b.id) })
    );
  }
}
