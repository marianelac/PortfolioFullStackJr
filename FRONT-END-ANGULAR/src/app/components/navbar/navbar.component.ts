import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Redes } from 'src/app/interfaces/redes';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { LoginService } from 'src/app/servicios/login.service';
import { RedesServiceService } from 'src/app/servicios/RedesService.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  redesLista:any=[];
 
  redesForm:FormGroup;   
     
login:any;
  constructor(private autenticacionservice:AutenticacionService, private router:Router, private loginservice:LoginService, private redservice: RedesServiceService, private formBuilder:FormBuilder) {
    this.redesForm = this.formBuilder.group({
      idredes: [''],
      github: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
      instagram: ['', [Validators.required]],
      persona: [4]
    });
   }

  ngOnInit(): void {
    this.loginservice.LogState().subscribe((login) =>(this.login = login));
    this.obtenerRedes();
  }
  public obtenerRedes():void{
    this.redservice.obtenerRedes().subscribe({
      next: (response: Redes[]) =>{
        this.redesLista=response;
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
 logout(){
  this.autenticacionservice.CerrarSesion();
  this.router.navigate(['/login']) 
  
 }

 private clearForm() {
  this.redesForm.setValue({
    idredes: '',
    github: '',
    linkedin: '',
    instagram:'',
    persona:'4'
  })
}
private loadForm(redes: Redes) {
  this.redesForm.setValue({
    idredes: redes.idredes,
    github: redes.github,
    linkedin: redes.linkedin,
    instagram: redes.instagram,
    persona:redes.persona
  })
}
onSubmit() {
  let redes: Redes = this.redesForm.value;
  if (this.redesForm.get('idredes')?.value == '') {
    this.redservice.agregarRed(redes).subscribe(
      (newRedes: Redes) => {
        this.redesLista.push(newRedes);
      }
    );
  } else {
    this.redservice.editarRed(redes.idredes, redes).subscribe(
      () => {
        this.obtenerRedes();
      }
    )
  }
}
onNewRedes() {
  this.clearForm();
}
onEditRedes(index: number) {
  let redes: Redes = this.redesLista[index];
  this.loadForm(redes);
}
onDeleteRedes(index: number) {
  let redes: Redes = this.redesLista[index];
  if (confirm("¿Está seguro que desea borrar el enlace seleccionado?")) {
    this.redservice.borrarRed(redes.idredes).subscribe(
      () => {
        this.obtenerRedes();
      }
    )
  }
}
}

