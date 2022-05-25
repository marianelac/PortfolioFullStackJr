import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Skills } from "../interfaces/skills";


@Injectable({
    providedIn: 'root'
  })
  export class SkillsService{
private apiSkills= 'https://portfolio-mcg.herokuapp.com/api';

    constructor(private http:HttpClient){
        console.log("El servicio skills está corriendo.")
    }
  public  getById(idskills: number): Observable<Skills> {
        return this.http.get<Skills>(`${this.apiSkills}/skills/${idskills}`);
      }
   public obtenerSkills():Observable<Skills[]>{
        return this.http.get<Skills[]>(`${this.apiSkills}/skills/lista`);
    }
    public agregarSkills(skills:Skills):Observable<Skills>{
        return this.http.post<Skills>(`${this.apiSkills}/skills/crear`, skills);
    }
    public editarSkills(idskills:number, skills:Skills):Observable<Skills>{
        return this.http.put<Skills>(`${this.apiSkills}/skills/editar/${idskills}`, skills);
    }
    public borrarSkills(idskills:number):Observable<any>{
        return this.http.delete(`${this.apiSkills}/skills/borrar/${idskills}`, {responseType: 'text'});
    }
  }