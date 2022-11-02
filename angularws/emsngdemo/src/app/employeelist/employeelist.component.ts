import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { employees } from '../model/data';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit , OnChanges{

  employees:Employee[];
  @Input()
  newemp:any;
  constructor() { 
    console.log('employee list')
    this.employees = [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.employees.push(this.newemp)
  }

  ngOnInit(): void {
    this.employees = employees;
  }

}
