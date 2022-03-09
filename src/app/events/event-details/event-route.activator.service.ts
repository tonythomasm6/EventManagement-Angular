import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate{

  constructor(private eventService: EventService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot){
    // + to cast to number. Otherwise it will throw error
    const exists = !!this.eventService.getEvent(+route.params.id);
    if (!exists) {
      this.router.navigate(['404']);
    }
    return exists;
  }
}
