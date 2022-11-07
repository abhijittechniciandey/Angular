import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number=0;
  constructor(private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeroute.parent?.params.subscribe(param=> this.id=param['id'])
    
  }

}
