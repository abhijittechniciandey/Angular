import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  error:boolean = false;
  errMsg:string='Some error'
  constructor(private es:EmpService, private router:Router) { }
  ngOnInit(): void {}

  addEmployee(emp:any)
  {
    console.log(emp)
    
    //this.newemp.emit(emp.value);
    this.es.addEmployee(emp.value)
    .subscribe(data => {
      console.log(data)
      this.router.navigate(['list'])
    },
    err=>console.log(err));
    
    emp.reset();
  } 

}

