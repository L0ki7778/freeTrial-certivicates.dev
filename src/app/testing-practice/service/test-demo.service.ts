import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestDemoService {
  http = inject(HttpClient);
  pokeList: Pokemon[] = [];
  private pokeDetailsSubject = new BehaviorSubject<any[]>([]);
  pokeDetails$ = this.pokeDetailsSubject.asObservable();

  constructor() { }


  loadPokemon() {
    this.getPokeList().subscribe(data => {
      this.pokeList = data['results'];
      this.loadPokeDetails();
    });
  }


  async loadPokeDetails() {
    const pokeDetailsPromises = this.pokeList.map(pokemon =>
      lastValueFrom(this.getPokeDetails(pokemon.url))
    );


    await Promise.all(pokeDetailsPromises).then(details => {
      this.pokeDetailsSubject.next(details);
      this.loadSprites(details);
    });
  }


  async loadSprites(pokeDetails: any[]) {
    const spritePromises = pokeDetails.map(pokemon =>
      lastValueFrom(this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).pipe((
        map((data: any) => {
          pokemon.spriteUrl = data.sprites.front_default;
          return pokemon;
        })
      )))
    );


    Promise.all(spritePromises).then(updatedDetails => {
      this.pokeDetailsSubject.next(updatedDetails);
    });
  }


  getPokeList(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0');
  }


  getPokeDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
