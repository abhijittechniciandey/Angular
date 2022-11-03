import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  ename:FormControl;

  empform:FormGroup;
  phone:FormControl;
  email:FormControl;
  constructor() {
    this.ename = new FormControl('shalini');
    this.phone = new FormControl(
      '',[Validators.required, 
        Validators.pattern("\\d+"), 
        Validators.minLength(5)]
      );
      this.email=new FormControl('',
      [Validators.email, Validators.required])
    console.log(this.ename)
    this.empform = new FormGroup({
      phone:this.phone,
      city:new FormControl('Mumbai'),
      email: this.email
    })
   }

  ngOnInit(): void {
    
  }

}
