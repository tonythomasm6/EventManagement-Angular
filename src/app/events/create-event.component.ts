import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `
    <input type="button" value="Cancel" (click)="onCancel()">
`
})


export class CreateEventComponent{

  // variable to check if page is on edit or not
  isDirty: boolean = true;

  constructor(private router: Router) {
  }

  onCancel(){
    this.router.navigate(['/events']);
  }

}
