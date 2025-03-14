import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPlaygroundComponent } from './directives-playground.component';

describe('DirectivesPlaygroundComponent', () => {
  let component: DirectivesPlaygroundComponent;
  let fixture: ComponentFixture<DirectivesPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesPlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
