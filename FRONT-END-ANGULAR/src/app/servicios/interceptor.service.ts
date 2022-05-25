
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {


  constructor(private autenticacionservice: AutenticacionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
  const currentUser=  this.autenticacionservice.currentUserValue;
  const isLoggedIn= currentUser && currentUser.token;
  request.url.startsWith(environment.apiLog);
  if (isLoggedIn){
    request = request.clone({
      setHeaders:{
        Auth: `${currentUser.token}`
      }
    });
  }
  return next.handle(request);
  }
}



