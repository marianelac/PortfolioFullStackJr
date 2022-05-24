import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Redes } from '../interfaces/redes';
import { environment } from 'src/environments/environment';


@Injectable()
export class RedesServiceService {

private apiRed= environment.apiBaseUrl;

constructor(private http:HttpClient) {
    console.log("El servicio redes está corriendo.")

 }
 public obtenerRedes():Observable<Redes[]>{
     return this.http.get<Redes[]>(`${this.apiRed}/redes/lista`);
 }
public agregarRed(red: Redes):Observable<Redes>{
    return this.http.post<Redes>(`${this.apiRed}/redes/crear`, red);
}
public editarRed(idredes:number, red:Redes):Observable<Redes>{
    return this.http.put<Redes>(`${this.apiRed}/redes/editar/${idredes}`, red);
}
public borrarRed(idredes:number):Observable<any>{
    return this.http.delete(`${this.apiRed}/redes/borrar/${idredes}`, {responseType: 'text'});
}
}
