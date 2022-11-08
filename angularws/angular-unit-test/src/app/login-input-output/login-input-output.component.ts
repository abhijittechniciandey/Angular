import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export class User {
  constructor(public email: string, public password: string) {
  }
}

@Component({
  selector: 'app-login-input-output',
  templateUrl: './login-input-output.component.html',
  styleUrls: ['./login-input-output.component.css']
})
export class LoginInputOutputComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  login(email:string, password:string) {
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new User(email, password));
    }
  }

  ngOnInit(): void {
  }

}
