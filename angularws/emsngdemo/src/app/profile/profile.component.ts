import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id:number = 0;
  emp:any;
  constructor(private activeroute:ActivatedRoute,
    private router:Router) {
      //console.log(this.router.getCurrentNavigation()?.extras.state) 
    }

  ngOnInit(): void {
    this.activeroute.params.subscribe(param=> {
      console.log(param)
      this.id = param['id']
    })
    // for dynamic data being passed from 1 route to another
    //https://www.tektutorialshub.com/angular/angular-pass-data-to-route/
    // console.log(history.state)
    // this.emp=history.state
  }
  // localhost:4200/profile/12/details
  details()
  {
    this.router.navigate(['details'], { relativeTo:this.activeroute});
  }
  goBack()
  {
    //http://localhost:4200/list;id=1
   // this.router.navigate(['list',{id:this.id}])
   //http://localhost:4200/list?id=1
   this.router.navigate(['list'],{queryParams:{id:this.id}})
  }

}
