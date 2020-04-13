import { Component, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/test-service.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.css']
})
export class MyViewComponent implements OnInit {
  message : string = "Hi Vinay";
  show:boolean = true;
  users:any;

  constructor(private testService: TestServiceService, private localService : ServiceService) {     
    this.testService.printOnConsole(this.message);
    this.localService.printOnConsole(this.message);
  }

  ngOnInit() {
    this.users = [{
      'First_Name': 'Vinay',
      'Last_Name': 'Kumar',
      'Phone': '+91-880-223-702'
    },this.users = {
      'First_Name': 'Ravi',
      'Last_Name': 'Chaubey',
      'Phone': '+91-123-456-789'
    }]
  }

  showDetails(){
    if(this.show){
      this.show = false;
    }else{
      this.show = true;
    }
  }
}
