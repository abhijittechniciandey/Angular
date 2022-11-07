import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public us:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  logoutUser(){
    this.us.logout()
    this.router.navigate(['login'])
  }
}
