import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../service/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent with Test Bed', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockservice:AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('needsLogin returns true when the user has not been authenticated', () => {
    expect(component?.needsLogin()).toBeTruthy();
  });
  it('needsLogin returns false when the user has been authenticated', () => {
    localStorage.setItem('token', '12345');
    expect(component?.needsLogin()).toBeFalsy();
  });
  it('login button hidden when the user is authenticated', () => {
    const  compiled= fixture.nativeElement as HTMLElement;
    // To being with Angular has not done any change detection so the content is blank.
    expect(compiled.querySelector('a')?.textContent?.trim()).toBe('');
    // Trigger change detection and this lets the template update to the initial value which is Login since by
        // default we are not authenticated
    fixture.detectChanges();
    expect(compiled.querySelector('a')?.textContent?.trim()).toBe('Login');

    // Change the authetication state to true
    const authService = fixture.debugElement.injector.get(AuthService);
    spyOn(authService,'isAuthenticated').and.returnValue(true);

    // The label is still Login! We need changeDetection to run and for angular to update the template.
    expect(compiled.querySelector('a')?.textContent?.trim()).toBe('Login');
    fixture.detectChanges()
    // Now the label is Logout
    expect(compiled.querySelector('a')?.textContent?.trim()).toBe('Logout');
  });
  afterEach(() => { 
    localStorage.removeItem('token');
  });

});
// Real object
// describe('Component: Login with real object', () => {

//   let component: LoginComponent | null;
//   let service: AuthService | null;

//   beforeEach(() => { (1)
//     service = new AuthService();
//     component = new LoginComponent(service);
//   });

//   afterEach(() => { (2)
//     localStorage.removeItem('token');
//     service = null;
//     component = null;
//   });


//   it('needsLogin returns true when the user has not been authenticated', () => {
//     expect(component?.needsLogin()).toBeTruthy();
//   });

//   it('needsLogin returns false when the user has been authenticated', () => {
//     localStorage.setItem('token', '12345'); (3)
//     expect(component?.needsLogin()).toBeFalsy();
//   });
// });
// // fake object
// class MockAuthService { 
//   authenticated = false;

//   isAuthenticated() {
//     return this.authenticated;
//   }
// }

// describe('Component: Login with mock auth service', () => {

//   let component: LoginComponent | null;
//   let service: MockAuthService | null ;

//   beforeEach(() => { 
//     service = new MockAuthService();
//     component = new LoginComponent(service);
//   });

//   afterEach(() => {
//     service = null;
//     component = null;
//   });


//   it('needsLogin returns true when the user has not been authenticated', () => {
//     if(service)
//      service.authenticated = false; 
//     expect(component?.needsLogin()).toBeTruthy();
//   });

//   it('needsLogin returns false when the user has been authenticated', () => {
//     if(service)
//       service.authenticated = true;
//     expect(component?.needsLogin()).toBeFalsy();
//   });
// });

// // with spy
describe('Component: Login', () => {

  let component: LoginComponent | null;
  let service: AuthService;
  let authServiceSpy:any;
  beforeEach(() => { 
    service = new AuthService();
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    component = new LoginComponent(authServiceSpy);
  });
  afterEach(() => { 
    //service = null;
    component = null;
  });
  it('needsLogin returns true when the user has not been authenticated', () => {
    spyOn(service,'isAuthenticated').and.returnValue(false)
   // authServiceSpy.isAuthenticated.and.returnValue(false)
    expect(component?.needsLogin()).toBeTruthy();
    expect(authServiceSpy?.isAuthenticated).toHaveBeenCalled(); 

  });

  it('needsLogin returns false when the user has been authenticated', () => {
    authServiceSpy.isAuthenticated.and.returnValue(true)
    expect(component?.needsLogin()).toBeFalsy();
    expect(authServiceSpy?.isAuthenticated).toHaveBeenCalled();
  });
});