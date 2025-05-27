import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPlaygroundComponent } from './directives-playground.component';
import { HostPracticeDirective } from '../../directives/host-practice.directive';

describe('DirectivesPlaygroundComponent', () => {
  let component: DirectivesPlaygroundComponent;
  let fixture: ComponentFixture<DirectivesPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesPlaygroundComponent, HostPracticeDirective]
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
