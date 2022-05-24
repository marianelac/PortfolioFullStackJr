import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUsuario } from '../interfaces/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private loggedo$ = new BehaviorSubject<boolean>(false);
 loading:boolean;

  constructor(private http:HttpClient) { 
    this.loading=false;
  }
LogIn(){
  this.loggedo$.next(true);
}
LogOut(){
  this.loggedo$.next(false);
}
LogState(){
  return this.loggedo$.asObservable();
}

}
