import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hasExclamationMark } from '../validators/customvalidator';


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
  address:FormGroup;

  constructor() {

    this.address=new FormGroup({
      country:new FormControl(),
      zipcode:new FormControl()
    })
    this.phone = new FormControl('',[Validators.required, Validators.pattern("\\d+"), 
        Validators.minLength(5)]);
      this.email=new FormControl('s!ha@g.c',
      [Validators.email, Validators.required, hasExclamationMark])
    this.empform = new FormGroup({
      phone:this.phone,
      city:new FormControl('',[Validators.required]),
      email: this.email,
      address: this.address
    })
    this.ename = new FormControl('shalini');
   }

  ngOnInit(): void {
    
  }

}
