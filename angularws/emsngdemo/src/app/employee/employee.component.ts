import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input()
  emp:Employee;
  @Input()
  selid:number=0;
  sel:boolean=false
  constructor() { 
    this.emp =
    {eid:0,ename:'',password:'',
    email:'',phone:''
    , address:{country:''}}
  }
 

  ngOnInit(): void {
    console.log(this.selid)
    console.log(this.emp.eid)
    if(this.selid === this.emp.eid)
      this.sel = !this.sel;
      console.log(this.sel)
  }


}
