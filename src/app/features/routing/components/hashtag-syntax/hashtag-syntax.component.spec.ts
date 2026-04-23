import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagSyntaxComponent } from './hashtag-syntax.component';

describe('HashtagSyntaxComponent', () => {
  let component: HashtagSyntaxComponent;
  let fixture: ComponentFixture<HashtagSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashtagSyntaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashtagSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
