import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  no:number=0;
  bdate:Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
