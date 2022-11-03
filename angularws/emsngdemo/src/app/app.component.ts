import { Component } from '@angular/core';
import { Employee } from './model/employee';
import { DemoService } from './service-comp/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //ds:DemoService;
  constructor( public ds:DemoService){
    //this.ds = ds;
  }
  title = 'Welcome to Rebit';
  isEnabled:boolean = false;
  message:string = 'Enter some text'
  add:boolean = false;
  
  clicked()
  {
    alert('button clicked')
    
  }
  newemp:any;
  newEmployeeEmitted(data:any)
  {
    alert('emitted')
    console.log(data)
    this.newemp = data;
  }
  addEmp(){
    this.add=!this.add;
  }
}
