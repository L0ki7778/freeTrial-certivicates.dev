import { fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';

import { TestDemoService } from './test-demo.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { pokeList } from './mockdata';

describe('TestDemoService', () => {
  let service: TestDemoService,
    httpTestingController: HttpTestingController;
    

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TestDemoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should load a list of pokemon', () => {

    service.getPokeList().subscribe((pokemonList: any[]) => {
      expect(pokemonList).toBeTruthy()
      expect(pokemonList.length).toEqual(9)
    })

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0');

    expect(req.request.method).toEqual('GET');

    req.flush(Object.values(pokeList))

  });

  fit('should get PokeDetails',fakeAsync(()=>{
    service.pokeList = Object.values(pokeList)
    expect(service.pokeList.length).toEqual(9)

    service.loadPokeDetails().then(()=>{
      expect()
    })

  }))

  afterEach(() => {
    httpTestingController.verify();
  })

});
