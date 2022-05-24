import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUsuario } from '../interfaces/login-usuario';
import { Persona } from '../interfaces/persona';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private apiAuth = environment.apiLog;
user:LoginUsuario={username:'', password:'', token:''};
//persona!:Persona; 
loggedIn():void{
  this.loggedService.LogIn();
}
loggedOut():void{
  this.loggedService.LogOut();
}
logState():void{
  this.loggedService.LogState();
}
  currentUserSubject: BehaviorSubject<any>;
  public currentUser:Observable<Persona>;



  constructor(private http:HttpClient,private router:Router, private loggedService:LoginService ) { 
    console.log("Autenticación service siendo usado");
  

  this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')||'{}'));
  this.currentUser=this.currentUserSubject.asObservable();
  }
  public get currentUserValue():any{
    return this.currentUserSubject.value;
  }

  IniciarSesion(credenciales:any):Observable<any>{

  return this.http.post<any>(this.apiAuth, credenciales).pipe(map(user=>{
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    console.log("desde el autenticación service",
    this.currentUserSubject.value.token)
    this.loggedIn();
    return user;
  }))
  }
 
  CerrarSesion(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.loggedOut();
    localStorage.clear();
    console.clear();
    
 // this.currentUserSubject.next(null);
 
  

  // probar despues   window.sessionStorage.clear();
  //  sessionStorage.removeItem('currentUser');
 
 
 // window.location.reload();
  
 //this.router.navigate(['/login']);
  }  
}
