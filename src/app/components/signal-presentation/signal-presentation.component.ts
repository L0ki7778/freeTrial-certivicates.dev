import { Component } from '@angular/core';
import { HashtagSyntaxComponent } from '../hashtag-syntax/hashtag-syntax.component';
import { SignalComponent } from '../signal/signal.component';

@Component({
  selector: 'app-signal-presentation',
  imports: [HashtagSyntaxComponent, SignalComponent],
  templateUrl: './signal-presentation.component.html',
  styleUrl: './signal-presentation.component.scss'
})
export class SignalPresentationComponent {
  eventData:any;

  handleEventOutput(event:Event, element:Object){
    console.log(element)
    console.log(typeof element)
    this.eventData=event
  }
}
