import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';


// Routes added for compile time safety. Can work without it.
export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren:  () => import('./user/user.module').then(m => m.UserModule) }

];
