import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  pcountry:string ='usa';
  emp = {"name":"Shalini"}
  show:boolean = true
  constructor() { 
    console.log(`parent constructor`);
  }

  ngOnInit(): void {
    console.log(`parent ng oninit `);
  }

}
