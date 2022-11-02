import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input()
  emp:Employee;
  
  constructor() { 
    this.emp =
    {eid:0,ename:'',password:'',
    email:'',phone:''
    , address:{country:''}}
  }

  ngOnInit(): void {
  }

}
