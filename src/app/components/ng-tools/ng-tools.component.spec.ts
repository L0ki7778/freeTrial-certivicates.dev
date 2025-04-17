import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToolsComponent } from './ng-tools.component';

describe('NgToolsComponent', () => {
  let component: NgToolsComponent;
  let fixture: ComponentFixture<NgToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
