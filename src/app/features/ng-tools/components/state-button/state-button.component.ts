import { CommonModule } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'state-button',
  imports: [CommonModule],
  templateUrl: './state-button.component.html',
  styleUrl: './state-button.component.scss'
})
export class StateButtonComponent {
  action$ = timer(2000);

  initialTemplate=input.required<TemplateRef<any>>();
  workingTemplate=input.required<TemplateRef<any>>();
  doneTemplate=input.required<TemplateRef<any>>();
  
  currentTemplate!:TemplateRef<any>
  
  ngOnInit() {
    this.currentTemplate = this.initialTemplate();
  }
  
  triggerAction() {
    this.currentTemplate = this.workingTemplate();
    this.action$.subscribe(() => this.currentTemplate = this.doneTemplate());
  }
}
