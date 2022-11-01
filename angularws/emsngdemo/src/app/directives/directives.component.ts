import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  styles: string = 'bgyellow txtgreen';

  people: any[] = [
    {
      name: 'Douglas Pace',
      age: 35,
      country: 'MARS',
    },
    {
      name: 'Mcleod Mueller',
      age: 32,
      country: 'USA',
    },
    {
      name: 'Aguirre Ellis',
      age: 34,
      country: 'UK',
    },
    {
      name: 'Cook Tyson',
      age: 32,
      country: 'USA',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
