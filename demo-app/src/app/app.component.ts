import { Component } from '@angular/core';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  constructor() {
    this.user = {
      'id': 1,
      'name': 'Vinay Kumar',
      'address': 'New Delhi'
    }
   }
  title = 'demo-app';
}
