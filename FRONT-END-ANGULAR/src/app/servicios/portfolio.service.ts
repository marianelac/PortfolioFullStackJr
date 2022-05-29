import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../interfaces/persona';




@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

private apiServerUrl= 'https://portfolio-mcg.herokuapp.com/api';

  constructor(private http:HttpClient) { 
console.log("El servicio portfolio persona está corriendo")
  }

 public obtenerPersona(idpersona:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/personas/${idpersona}`);// al crear usuario guardar bien el id para ponerlo acá
  }
 public guardarDatos(persona:Persona):Observable<any>{
    return this.http.post(`${this.apiServerUrl}/personas/crear`, persona);
  } 
public editarPersona(idpersona:number, persona:Persona, ):Observable<Persona>{
  return this.http.put<Persona>(`${this.apiServerUrl}/personas/editar/${idpersona}`, persona);
}
public  borrarPersona(idpersona:number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/personas/borrar/${idpersona}`, {responseType: 'text'});
  }
  public  getById(idpersona: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiServerUrl}/personas/${idpersona}`);
  }
}
