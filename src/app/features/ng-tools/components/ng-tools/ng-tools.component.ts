import { Component, computed, contentChild, ElementRef, input } from '@angular/core';


@Component({
  selector: 'ng-tools',
  imports: [],
  templateUrl: './ng-tools.component.html',
  styleUrl: './ng-tools.component.scss'
})
export class NgToolsComponent {
infoContent = contentChild.required<ElementRef>('test')
showTemplate=input.required<boolean>()
show=computed(()=>{
  return this.showTemplate()
})

constructor(){}
}
