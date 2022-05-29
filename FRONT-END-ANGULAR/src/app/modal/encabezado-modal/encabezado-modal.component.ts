import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/interfaces/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado-modal',
  templateUrl: './encabezado-modal.component.html',
  styleUrls: ['./encabezado-modal.component.css']
})
export class EncabezadoModalComponent implements OnInit {
  @Input()  id!:number; 

  persona!:Persona;
  formulario!:FormGroup;

  constructor(private activeModal:NgbActiveModal, private datosportfolio:PortfolioService, private fb:FormBuilder) {
    this.formulario = this.fb.group({
      nombres:['', [Validators.required]],
      apellido:['', [Validators.required]],
      ocupacion:['', [Validators.required]],
      ubicacion:['', [Validators.required]],
      email:['',[Validators.required]],
      fotoperfil:['',[Validators.required]],
      fotofondo:['',[Validators.required]],
      acerca:['', [Validators.required]],
      username:['', [Validators.required]],
      password:[''],
      token:['']
    });
   }

  ngOnInit(): void {
    this.getById(this.id)
  }
  cerrarModal(){
    this.activeModal.close();
  }
  
  getById(id: number) {
    
     this.datosportfolio.getById(4).subscribe (
             data => {
          this.persona = data; 
          console.log(this.persona)
          this.editarForm(this.persona)
         }
         );
        }
         editarForm(encabezado:any){
          this.formulario.setValue( {
            
            nombres: encabezado.nombres,
            apellido: encabezado.apellido,
            email: encabezado.email,
            ocupacion: encabezado.ocupacion,
            ubicacion: encabezado.ubicacion,
            fotoperfil: encabezado.fotoperfil,
            fotofondo: encabezado.fotofondo,
            acerca: encabezado.acerca,
            username:encabezado.username,
            password:encabezado.password,
            token: encabezado.token
            
          });
        }

        guardarEncabezado(){
          this.actualizarEncabezado();
        }


        actualizarEncabezado(){
          console.log(this.formulario.value)
          this.datosportfolio.editarPersona(this.id, this.formulario.value).subscribe(
            data => {
              this.activeModal.close();

            }
          );
        }
}
