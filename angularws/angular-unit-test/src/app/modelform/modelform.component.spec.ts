import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModelformComponent, User } from './modelform.component';

describe('ModelformComponent', () => {
  let component: ModelformComponent;
  let fixture: ComponentFixture<ModelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelformComponent],
      imports: [ReactiveFormsModule, FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
});

it('email field validity', () => {
    let errors = {};
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    expect(email.errors?.['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
   
    expect(email.errors?.['required']).toBeFalsy();
    expect(email.errors?.['pattern']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    
    expect(email.errors?.['required']).toBeFalsy();
    expect(email.errors?.['pattern']).toBeFalsy();
});

it('password field validity', () => {
    let errors = {};
    let password = component.form.controls['password'];

    // Email field is required
    errors = password.errors || {};
    expect(password.errors?.['required']).toBeTruthy();

    // Set email to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(password.errors?.['required']).toBeFalsy();
    expect(password.errors?.['minlength']).toBeTruthy();

    // Set email to something correct
    password.setValue("123456789");
    errors = password.errors || {};
    expect(password.errors?.['required']).toBeFalsy();
    expect(password.errors?.['minlength']).toBeFalsy();
});

it('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue("test@test.com");
    component.form.controls['password'].setValue("123456789");
    expect(component.form.valid).toBeTruthy();

    let user: User = new User('','');
    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => user = value);

    // Trigger the login function
    component.login();

    // Now we can check to make sure the emitted value is correct
    expect(user.email).toBe("test@test.com");
    expect(user.password).toBe("123456789");
});
});
