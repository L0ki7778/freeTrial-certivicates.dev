import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToolsComponent } from './ng-tools.component';
import { ElementRef } from '@angular/core';

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
    (component as any).infoContent = () => ({ nativeElement: { textContent: 'test' } } as ElementRef);
    fixture.componentRef.setInput('showTemplate', true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
