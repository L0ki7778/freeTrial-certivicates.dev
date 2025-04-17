import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalPresentationComponent } from './signal-presentation.component';

describe('SignalPresentationComponent', () => {
  let component: SignalPresentationComponent;
  let fixture: ComponentFixture<SignalPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
