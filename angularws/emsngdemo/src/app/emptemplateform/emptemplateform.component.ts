import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emptemplateform',
  templateUrl: './emptemplateform.component.html',
  styleUrls: ['./emptemplateform.component.css']
})
export class EmptemplateformComponent implements OnInit {

  @Output()
  newemp:EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private es:EmpService) { }
  ngOnInit(): void {}

  addEmployee(emp:any)
  {
    console.log(emp)
    
    //this.newemp.emit(emp.value);
    this.es.addEmployee(emp.value)
    .subscribe(data => console.log(data));
    emp.reset();
  } 

}

