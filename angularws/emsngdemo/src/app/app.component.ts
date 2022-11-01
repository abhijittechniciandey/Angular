import { Component } from '@angular/core';

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
}
