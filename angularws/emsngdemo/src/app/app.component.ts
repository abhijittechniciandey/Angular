import { Component } from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Rebit';
  isEnabled:boolean = false;
  message:string = 'Enter some text'
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
}
