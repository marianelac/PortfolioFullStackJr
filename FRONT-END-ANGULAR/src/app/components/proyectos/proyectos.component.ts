import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/interfaces/proyecto';
import { LoginService } from 'src/app/servicios/login.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 public proyectosLista:Proyectos[]=[]; 

 proyectoForm:FormGroup;

  constructor(private proyectoservice:ProyectosService, private formBuilder:FormBuilder, private loginservice:LoginService) { 
    this.proyectoForm=this.formBuilder.group({
      idproyectos:[''],
      nombreproyecto:['', [Validators.required]],
      descripcion:['', [Validators.required]],
      enlace:['', [Validators.required]],
      fechainicio:['', [Validators.required]],
      fechafin:['', [Validators.required]],
      persona:[4]
    })
  }
login:any;
  ngOnInit(): void {
    this.loginservice.LogState().subscribe((login)=>(this.login = login));
   this.obtenerProyectos();
   console.log(this.login);
   }

   public obtenerProyectos():void{
     this.proyectoservice.obtenerProyectos().subscribe({
       next: (response: Proyectos[]) =>{
         this.proyectosLista=response;
       },
       error: (error: HttpErrorResponse)=>{
         alert(error.message);
       }
     })
   }
   private clearForm(){
     this.proyectoForm.setValue({
       idproyectos:'',
       nombreproyecto:'',
       descripcion:'',
       enlace:'',
       fechainicio:'',
       fechafin:'',
       persona:'4'
     })
   }
   private loadForm(proyecto:Proyectos){
     this.proyectoForm.setValue({
       idproyectos: proyecto.idproyectos,
       nombreproyecto: proyecto.nombreproyecto,
       descripcion: proyecto.descripcion,
       enlace: proyecto.enlace,
       fechainicio: proyecto.fechainicio,
       fechafin: proyecto.fechafin,
       persona:proyecto.persona
     })
   }
   onSubmit(){
     let proyecto: Proyectos = this.proyectoForm.value;
     if(this.proyectoForm.get('idproyectos')?.value == ''){
       this.proyectoservice.agregarProyecto(proyecto).subscribe(
         (newProyecto: Proyectos)=>{
           this.proyectosLista.push(newProyecto);
         }
       );
     }else{
       this.proyectoservice.editarProyecto(proyecto.idproyectos, proyecto).subscribe(
         () =>{
           this.obtenerProyectos();
         }
       )
        }
     }
     onNewProyecto(){
this.clearForm();
     }
     onEditProyecto(index:number){
      let proyecto: Proyectos = this.proyectosLista[index];
      this.loadForm(proyecto);
     }
     onDeleteProyecto(index:number){
       let proyecto:Proyectos = this.proyectosLista[index];
       if(confirm("¿Está seguro de que desea borrar el proyecto seleccionado?")){
         this.proyectoservice.borrarProyecto(proyecto.idproyectos).subscribe(
           () =>{
             this.obtenerProyectos();
           }
         )
       }
     }
   }

