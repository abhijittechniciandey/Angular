import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('username'))
      return true;
    return false;
  }
}
