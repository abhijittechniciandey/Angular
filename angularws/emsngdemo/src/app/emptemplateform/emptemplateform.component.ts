import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emptemplateform',
  templateUrl: './emptemplateform.component.html',
  styleUrls: ['./emptemplateform.component.css']
})
export class EmptemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  addEmployee(emp:any)
  {
    console.log(emp)
  }

}

