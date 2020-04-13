import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-example',
  templateUrl: './rest-example.component.html',
  styleUrls: ['./rest-example.component.css']
})
export class RestExampleComponent implements OnInit {
  page : number = 1;
  prev:boolean=false;
  nxt:boolean=true;
  max:number = 4;
  users:any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users?page='+this.page).subscribe(detail =>{
      this.users = detail;      
    });
  }

  next(){
    if(this.page < this.max){
      this.page += 1;
      this.ngOnInit();
      
      this.prev = true;
      if(this.page == this.max){
        this.nxt = false;  
      }
    }else{
      this.nxt = false;
    }
  }

  previous(){
    if(this.page > 1){
      this.page -= 1;
      this.ngOnInit();

      this.nxt = true;
      if(1 == this.page){
        this.prev = false;
      }
    }else{
      this.prev = false;
    }    
  }

}
