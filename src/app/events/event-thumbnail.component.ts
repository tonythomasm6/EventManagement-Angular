import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from './shared';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  templateUrl: `./event-thumbnail.component.html`,
  styles: [`
    .green { color: #003300 !important}
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent{
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();


  // tslint:disable-next-line:typedef
    getTimeClass(){
     const isEarlyStart = this.event && this.event.time === '8:00 am';
     if (isEarlyStart) {
       return 'green bold';
     }
     return '';
     }

  // handleClickMe() {
  //   this.eventClick.emit('Fooo');
  // }
  //
  // handleTemplateRefVariable(){
  //   console.log(' ohhhhh');
  // }


}
