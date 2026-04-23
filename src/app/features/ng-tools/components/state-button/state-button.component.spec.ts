import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateButtonComponent } from './state-button.component';

xdescribe('StateButtonComponent', () => {
  let component: StateButtonComponent;
  let fixture: ComponentFixture<StateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StateButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('initialTemplate', '  <ng-template #myTemplate>      <div>Test Template Content</div>    </ng-template>');
    fixture.componentRef.setInput('workingTemplate', '  <ng-template #myTemplate>      <div>Test Template Content</div>    </ng-template>');
    fixture.componentRef.setInput('doneTemplate', '  <ng-template #myTemplate>      <div>Test Template Content</div>    </ng-template>');
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
