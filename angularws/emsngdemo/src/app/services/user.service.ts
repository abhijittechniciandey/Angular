import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost:8080'
  constructor(private http:HttpClient) { }

  loginUser(username:string, password:string)
  {
    return this.http.post<any>(`${this.url}/auth`,{username, password});
  }

  getToken()
  {
    return sessionStorage.getItem('token')
  }
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
