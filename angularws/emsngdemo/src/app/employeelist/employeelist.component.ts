import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { employees } from '../model/data';
import { Employee } from '../model/employee';
import { trigger, style, animate, transition , state} from '@angular/animations';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      //fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(1500)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(500, style({opacity: 0})))
    ])
  ],
})
export class EmployeelistComponent implements OnInit , OnChanges{

  employees:Employee[];
  @Input()
  newemp:Employee ={eid:0,ename:'',password:'',
  email:'',phone:''
  , address:{country:''}};
  editemp:Employee | null;

  isEdit:boolean=true;
  constructor(private es:EmpService) { 
    console.log('employee list')
    this.employees = [];
    this.editemp = null;
    // this.newemp = {eid:0,ename:'',password:'',
    // email:'',phone:''
    // , address:{country:''}};
    console.log(this.newemp)
  }
  ngOnInit(): void {
    //this.employees = employees;
    this.es.getAllEmployees().subscribe(data=> this.employees = data);
    console.log('on init')
    console.log(this.employees)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.employees.push(this.newemp)
  }
  edit(employee:Employee)
  {
    this.editemp = employee;
    this.isEdit = !this.isEdit;
  }

  updateEmployee(emp:any)
  {
    if(emp !== null)
      {
    let objindx = this.employees.findIndex(employee=>employee.eid === emp.eid);
      
      this.employees[objindx] = emp;
      }
      this.isEdit = !this.isEdit  
  }
}
