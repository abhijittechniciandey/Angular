import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-emptemplateform',
  templateUrl: './emptemplateform.component.html',
  styleUrls: ['./emptemplateform.component.css']
})
export class EmptemplateformComponent implements OnInit {

  @Output()
  newemp:EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { }
  ngOnInit(): void {}

  addEmployee(emp:any)
  {
    console.log(emp)
    
    this.newemp.emit(emp.value);
    emp.reset();
  } 

}

