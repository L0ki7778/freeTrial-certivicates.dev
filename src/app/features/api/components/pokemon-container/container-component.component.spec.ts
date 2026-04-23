import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponentComponent } from './container-component.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PokeService } from '../../services/pokemon/pokemon-service';

fdescribe('ContainerComponentComponent', () => {
  let component: ContainerComponentComponent;
  let fixture: ComponentFixture<ContainerComponentComponent>;
  let service: any;

  beforeEach(async () => {
    const pokemonService = jasmine.createSpyObj('PokeService', ['loadPokemon']);

    await TestBed.configureTestingModule({
      imports: [ContainerComponentComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: PokeService, useValue: pokemonService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContainerComponentComponent);
    service = TestBed.inject(PokeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {


    expect(component).toBeTruthy();
  });
});
