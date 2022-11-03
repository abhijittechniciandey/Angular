import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  message:string;
  constructor() { 
    this.message='REBIT';
    console.log('demo service')
  }
}
