import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginInputOutputComponent, User } from './login-input-output.component';

describe('LoginInputOutputComponent', () => {
  let component: LoginInputOutputComponent;
  let fixture: ComponentFixture<LoginInputOutputComponent>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInputOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginInputOutputComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Setting enabled to false disabled the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
});

it('Setting enabled to true enables the submit button', () => {
    component.enabled = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
});

it('Entering email and password emits loggedIn event', () => {
    let user: User = new User('','');
    loginEl.nativeElement.value = "test@example.com";
    passwordEl.nativeElement.value = "123456";

    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => user = value);

    // This sync emits the event and the subscribe callback gets executed above
    submitEl.triggerEventHandler('click', null);

    // Now we can check to make sure the emitted value is correct
    expect(user.email).toBe("test@example.com");
    expect(user.password).toBe("123456");
});
});
