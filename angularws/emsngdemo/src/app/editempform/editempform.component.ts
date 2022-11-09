import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-editempform',
  templateUrl: './editempform.component.html',
  styleUrls: ['./editempform.component.css']
})
export class EditempformComponent {

  @Input()
  employee:Employee|null;

  @Output()
  empupdate:EventEmitter<Employee | null> = new EventEmitter();
  title = "Edit Employee"
  constructor() {
    this.employee = null;
   }



  editEmployee(eform:any)
  {
    this.empupdate.emit(eform.value);
    eform.reset();
  }
  cancelEdit()
  {
    this.empupdate.emit(null);
  }

}
