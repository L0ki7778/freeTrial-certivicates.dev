import { ElementRef, inject, Renderer2 } from '@angular/core';
import { HeaderDirective } from './header.directive';

describe('HeaderDirective', () => {
    let element = new ElementRef(document.createElement('div'));
    let renderer = inject(Renderer2)
    const directive = new HeaderDirective(element,renderer);
    expect(directive).toBeTruthy();
});
