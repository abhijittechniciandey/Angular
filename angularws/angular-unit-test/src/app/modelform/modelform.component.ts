import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

export class User {
  constructor(public email: string,
    public password: string) {
  }
}

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent  {

  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({});
  }

  ngOnInit() { (4)
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }

  login() {
    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      this.loggedIn.emit(
          new User(
              this.form.value.email,
              this.form.value.password
          )
      );
    }
  }

}
