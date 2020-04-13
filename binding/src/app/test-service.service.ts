import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  printOnConsole(msg){
    console.log(msg);    
  }
}
