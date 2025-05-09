import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationalComponentComponent } from './presentational-component.component';

describe('PresentationalComponentComponent', () => {
  let component: PresentationalComponentComponent;
  let fixture: ComponentFixture<PresentationalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
