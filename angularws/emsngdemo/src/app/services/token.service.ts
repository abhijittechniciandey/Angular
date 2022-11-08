import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor(private us:UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor')
    let reqclone = req;
    if(this.us.isAuthenticated()){
      console.log('yes')
      let token = this.us.getToken()
      console.log(token)
       reqclone = req.clone({
        headers: req.headers.set("Authorization",
                    "Bearer " + token)
      })
    }
    return next.handle(reqclone);
  }
}
