import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate  {

  constructor(private autenticacion:AutenticacionService ,private rutas:Router ){}

  canActivate(){
  let currentUser= this.autenticacion.UsuarioAutenticado;
  if(currentUser && currentUser.accessToken)
  {
    return true;
  } else
  {
    this.rutas.navigate(['/login']);
    return false;
  }

  } 
}
