import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTestingComponent } from './type-testing.component';

describe('TypeTestingComponent', () => {
  let component: TypeTestingComponent;
  let fixture: ComponentFixture<TypeTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
