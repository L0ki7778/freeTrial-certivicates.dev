import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteInputsComponent } from './route-inputs.component';

describe('RouteInputsComponent', () => {
  let component: RouteInputsComponent;
  let fixture: ComponentFixture<RouteInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
