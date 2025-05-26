import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { By } from '@angular/platform-browser';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('person', { firstName: 'John', lastName: 'Smith', gender: 'male' });
    fixture.detectChanges();
  });

  it('should display first name of person in html', () => {
    let el = fixture.debugElement.query(By.css('.first-name-class'));
    expect(component).toBeTruthy();
    expect(el.nativeElement.textContent).toBe('John');
    console.log("Wir haben nur 'John getestet'")
    expect(el.nativeElement.textContent).toBe(component.person().firstName);
    console.log("Wir haben dynamisch getestet")
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
