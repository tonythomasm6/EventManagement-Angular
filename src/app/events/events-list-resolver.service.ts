/**
 * This is to get the observable object on fetching list of events
 * This service will ensure that the whole component will be loaded only after data is loaded.
 * **/

import {Injectable} from '@angular/core';
import {EventService} from './shared/event.service';
import {Resolve} from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {
  }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }

}
