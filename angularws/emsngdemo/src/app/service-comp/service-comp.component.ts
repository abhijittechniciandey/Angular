import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html',
  styleUrls: ['./service-comp.component.css'],
  providers:[DemoService]
})
export class ServiceCompComponent implements OnInit {

  constructor(public ds:DemoService) { }

  ngOnInit(): void {
  }

}
