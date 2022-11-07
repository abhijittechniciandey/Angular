import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('token'))
      return true;
    return false;
  }
  logout()
  {
    sessionStorage.removeItem('token')
  }
}
