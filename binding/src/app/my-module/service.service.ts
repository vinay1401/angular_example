import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  printOnConsole(msg){
    console.log('_____ '+msg);
  }
}
