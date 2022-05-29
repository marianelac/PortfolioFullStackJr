import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Proyectos } from "../interfaces/proyecto";



@Injectable({
    providedIn: 'root'
  })
  export class ProyectosService{

  private  apiProyectos= 'https://portfolio-mcg.herokuapp.com/api';

    constructor(private http:HttpClient){
        console.log("El servicio proyectos está corriendo.")
    }
public obtenerProyectos():Observable<Proyectos[]>{
  return this.http.get<Proyectos[]>(`${this.apiProyectos}/proyectos/lista`);
}
public agregarProyecto(proyecto: Proyectos): Observable<Proyectos>{
  return this.http.post<Proyectos>(`${this.apiProyectos}/proyectos/crear`, proyecto);
}

public editarProyecto(idproyectos:number, proyecto:Proyectos):Observable<Proyectos>{
  return this.http.put<Proyectos>(`${this.apiProyectos}/proyectos/editar/${idproyectos}`, proyecto);
}

public borrarProyecto(idproyectos:number):Observable<any>{
  return this.http.delete(`${this.apiProyectos}/proyectos/borrar/${idproyectos}`, {responseType: 'text'});
}
    
  }