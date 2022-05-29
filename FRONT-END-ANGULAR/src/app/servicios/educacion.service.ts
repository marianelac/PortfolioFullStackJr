import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Educacion } from "../interfaces/educacion";






@Injectable({
    providedIn: 'root'
  })
  export class EducacionService{
private apiEdu= 'https://portfolio-mcg.herokuapp.com/api';

    constructor(private http:HttpClient){
        console.log("El servicio educación está corriendo.")
    }

 public obtenerEducacion():Observable<Educacion[]>{
        return this.http.get<Educacion[]>(`${this.apiEdu}/educacion/lista`);
    }


public agregarEducacion(educacion:Educacion):Observable<Educacion>{
        return this.http.post<Educacion>(`${this.apiEdu}/educacion/crear`, educacion);
    }
public  editarEducacion(ideducacion:number, educacion:Educacion):Observable<Educacion>{
        return this.http.put<Educacion>(`${this.apiEdu}/educacion/editar/${ideducacion}`, educacion);
    }
public    borrarEducacion(ideducacion:number):Observable<any>{
        return this.http.delete(`${this.apiEdu}/educacion/borrar/${ideducacion}`, {responseType: 'text'});
    }
  }
