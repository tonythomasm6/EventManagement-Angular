import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';

declare let toastr;

@Component({
  // tslint:disable-next-line:component-selector
  // selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit{
  events: any;
  constructor(private eventService: EventService, private toastrService: ToastrService,
              private route: ActivatedRoute){

  }

  ngOnInit(){
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(name){
    toastr.success(name);
  }
//   handleEventClicked($event: any) {
//     console.log('In parent' + $event);
//   }
 }
