import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  base:number=2;
  no:number=0;
  employee:any = {name:'shalini'};
  bdate:Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
