import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-obs',
  templateUrl: './promise-obs.component.html',
  styleUrls: ['./promise-obs.component.css']
})
export class PromiseObsComponent implements OnInit {
 
  isEnabled:boolean = false;
  data:Observable<String> | null;
  fruits:Array<string>;
  constructor() { 
    this.data = null;
    this.fruits = [];
  }
  
  ngOnInit(): void {
   // this.promiseDemo();
   console.log('on init') 
  }
  observeData()
  {
   this.data = new Observable(observer=>{
      console.log('observable created')
      setTimeout(() => {observer.next('Apples');}, 1000);
      setTimeout(() => observer.next('Oranges'), 2000);
      setTimeout(() => observer.error('OOOPS'), 3000);
      setTimeout(() => observer.next('Banana'), 3000);
      setTimeout(() => observer.next('Watermelon'), 4000);
      setTimeout(() => observer.next('Cherries'), 5000);
      setTimeout(() => observer.complete(), 3000);
    });
    this.data.subscribe(fruit=>console.log(fruit),
    err=>console.log('error ',err),
    ()=>console.log('DONE'));
  }
  async promiseDemo()
  {
      let promise = new Promise((resolve, reject)=>{
        console.log('promise object created')
        //REST API
        setTimeout(() => {
          if(this.isEnabled)
            resolve('success')
          else
          reject('failure')
        }, 3000);
      })
      promise.then(resp=>console.log(resp))
      .catch(err=> console.log(err))
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res=>{
        res.json()})
      .then(data=>console.log(data))
      // redirect 
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log(response)
      //redirect
      console.log('DONE')
  }

}
