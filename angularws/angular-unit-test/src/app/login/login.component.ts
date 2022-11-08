import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth: AuthService) {
  }

  needsLogin() {
    // mock of auth and spy on isAuthenticated() => true \ false
    return !this.auth.isAuthenticated();
  }

}
