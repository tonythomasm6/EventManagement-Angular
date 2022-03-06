import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  // templateUrl: './app.component.html',
  template : `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent {
  title = 'app';
}
