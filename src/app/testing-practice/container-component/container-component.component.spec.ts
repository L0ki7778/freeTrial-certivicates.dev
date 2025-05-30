import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponentComponent } from './container-component.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestDemoService } from '../service/test-demo.service';

fdescribe('ContainerComponentComponent', () => {
  let component: ContainerComponentComponent;
  let fixture: ComponentFixture<ContainerComponentComponent>;
  let service: any;

  beforeEach(async () => {
    const pokemonService = jasmine.createSpyObj('TestDemoService', ['loadPokemon']);

    await TestBed.configureTestingModule({
      imports: [ContainerComponentComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TestDemoService, useValue: pokemonService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContainerComponentComponent);
    service = TestBed.inject(TestDemoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {


    expect(component).toBeTruthy();
  });
});
