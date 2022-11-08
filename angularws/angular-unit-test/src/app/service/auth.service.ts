import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class AuthService {
  isLogin:boolean=true;
    isAuthenticated(): boolean {
      if(localStorage.getItem('token')=== null)
       return false;
       return true;
      //return !!localStorage.getItem('token');
    }
  }