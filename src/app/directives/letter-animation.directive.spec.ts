import { ElementRef, inject, Renderer2 } from '@angular/core';
import { LetterAnimationDirective } from './letter-animation.directive';

describe('LetterAnimationDirective', () => {
  it('should create an instance', () => {
    let element = new ElementRef(document.createElement('div'));
    let renderer = inject(Renderer2)
    const directive = new LetterAnimationDirective(element,renderer);
    expect(directive).toBeTruthy();
  });
});
