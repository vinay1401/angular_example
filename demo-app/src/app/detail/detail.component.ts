import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewInit {

  @Input('name') name: string;
  @Input('user') user: User;

  myUser:User;
  dateTime: string;

  constructor() { 
    setInterval(() =>
      this.dateTime = new Date().toDateString() + ' ' + new Date().toLocaleString()
    , 1000);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}
