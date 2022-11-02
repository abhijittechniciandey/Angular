import { Component, Input, OnInit } from '@angular/core';
import { employees } from '../model/data';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees:Employee[];
  @Input()
  newemp:any;
  constructor() { 
    console.log('employee list')
    this.employees = [];
  }

  ngOnInit(): void {
    this.employees = employees;
  }

}
