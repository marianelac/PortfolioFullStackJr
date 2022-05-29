import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from '../interfaces/login-usuario';
import { Persona } from '../interfaces/persona';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { LoginService } from '../servicios/login.service';
//import { LoginService } from '../servicios/login.service';
//import { TokenService } from '../servicios/token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  persona!: Persona;
user!:LoginUsuario;

form:FormGroup;

  constructor(
     private router:Router, 
     private formBuilder:FormBuilder,
     private autenticacionservice:AutenticacionService, private loginservice:LoginService ) {
    this.form=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
    

  ngOnInit(){} 

  /*loginFalso() {
    //pedir al post...
    this.loginservice.login("lulu", "erco97234").subscribe(
      data => {
        this.persona = data;
        console.log(this.persona);
        localStorage.setItem("persona", JSON.stringify(this.persona));
        this.volverAlHome();
      }
    );
  }*/

  onEnviar(event:Event) {
    //pedir al post...
  event.preventDefault;
    this.autenticacionservice.IniciarSesion(this.form.value).subscribe(
      data => {
        this.persona = data;
        console.log(this.persona);
        localStorage.setItem("persona", JSON.stringify(this.persona));
        this.volverAlHome();
      }
    );
  }

  volverAlHome() {
    this.router.navigate(['/inicio']);
  } 


  get Username(){
    return this.form.get('username');
  }
  get Password(){
    return this.form.get('password');
  }
 /* onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionservice.IniciarSesion(this.form.value).subscribe(data =>{
      console.log("DATA"+ JSON.stringify(data));
      this.router.navigate(['/inicio']);
    })
  } */
}
