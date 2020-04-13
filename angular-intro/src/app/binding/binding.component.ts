import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  isEnabled:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  
  setInterval(() => this.isEnabled=true, 1000)
}
