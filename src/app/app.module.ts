import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {CreateEventComponent} from './events/shared/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/shared/event-route.activator.service';
import {EventListResolver} from './events/events-list-resolver.service';

@NgModule({
  // All components created needs to be added here in declarations
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
  EventListResolver],
  // Component to start with needs to be mentioned here
  bootstrap: [EventsAppComponent],
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if (component.isDirty) {
    return window.confirm('You have not saved event. Do you want to continue?');
  }
  return true;
}
