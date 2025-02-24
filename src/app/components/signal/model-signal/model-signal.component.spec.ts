import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSignalComponent } from './model-signal.component';

describe('ModelSignalComponent', () => {
  let component: ModelSignalComponent;
  let fixture: ComponentFixture<ModelSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
