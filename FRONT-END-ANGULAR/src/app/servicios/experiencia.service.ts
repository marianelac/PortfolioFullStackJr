import { HttpClient } from "@angular/common/http";
import { Expression } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Experiencia } from "../interfaces/experiencia";





@Injectable({
    providedIn: 'root'
  })
  export class ExperienciaService{
private apiExp= environment.apiBaseUrl;
    constructor(private http:HttpClient){
        console.log("El servicio experiencia está corriendo.")
    }

 public   obtenerExperiencia():Observable<Experiencia[]>{
        return this.http.get<Experiencia[]>(`${this.apiExp}/experiencia/lista`);
    }
public obtenerExperienciaById(idexperiencia:number):Observable<any>{
  return this.http.get(`${this.apiExp}/ver/${idexperiencia}`);
} 
public  agregarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
        return this.http.post<Experiencia>(`${this.apiExp}/experiencia/crear`, experiencia);
    }
 public   editarExperiencia(idexperiencia:number, experiencia:Experiencia):Observable<Experiencia>{
        return this.http.put<Experiencia>(`${this.apiExp}/experiencia/editar/${idexperiencia}`, experiencia);
    }
 public   borrarExperiencia(idexperiencia:number):Observable<any>{
        return this.http.delete(`${this.apiExp}/experiencia/borrar/${idexperiencia}`, {responseType: 'text'});
    }
  }