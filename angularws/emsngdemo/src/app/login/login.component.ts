import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginValid:boolean=true
  constructor(public us:UserService, private router:Router) { }


  loginUser(user:any)
  {
    console.log(user)
    this.us.loginUser(user.username, user.password)
    .subscribe(resp=>{
      sessionStorage.setItem("token",resp['jwt'])
      this.router.navigate(['list'])
    });
  }
}
