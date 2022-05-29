import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/interfaces/educacion';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {


  public educacionLista: Educacion[] = [];

 educacionForm:FormGroup;



 
  constructor(private educacionService: EducacionService,
    private formBuilder:FormBuilder, private loginservice:LoginService
    ) {
      this.educacionForm = this.formBuilder.group({
        ideducacion: [''],
        titulo: ['', [Validators.required]],
        institucion:['',[Validators.required]],
        carrera: ['', [Validators.required]],
        logo: ['', [Validators.required]],
        fechainicio:['', [Validators.required]],
        fechafin:['', [Validators.required]],
        persona: [4]
      });
    }
login:any;
  ngOnInit(): void {
    this.loginservice.LogState().subscribe((login)=>(this.login = login));
    this.obtenerEducacion();
    console.log(this.login);
  }

  public obtenerEducacion(): void {
    this.educacionService.obtenerEducacion().subscribe({
      next: (response: Educacion[]) => {
        this.educacionLista = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  private clearForm() {
    this.educacionForm.setValue({
      ideducacion: '',
      titulo: '',
      institucion: '',
      carrera:'',
      logo: '',
      fechainicio:'',
      fechafin:'',
      persona:'4'
    })
  }
  private loadForm(educacion: Educacion) {
    this.educacionForm.setValue({
      ideducacion: educacion.ideducacion,
      titulo: educacion.titulo,
      institucion:educacion.institucion,
      carrera:educacion.carrera,
      logo:educacion.logo,
      fechainicio:educacion.fechainicio,
      fechafin:educacion.fechafin,
      persona:educacion.persona
    })
  }
  onSubmit() {
    let educacion: Educacion = this.educacionForm.value;
    if (this.educacionForm.get('ideducacion')?.value == '') {
      this.educacionService.agregarEducacion(educacion).subscribe(
        (newEducacion: Educacion) => {
          this.educacionLista.push(newEducacion);
        }
      );
    } else {
      this.educacionService.editarEducacion(educacion.ideducacion, educacion).subscribe(
        () => {
          this.obtenerEducacion();
        }
      )
    }
  }
  onNewEducacion() {
    this.clearForm();
  }
  onEditEducacion(index: number) {
    let educacion: Educacion = this.educacionLista[index];
    this.loadForm(educacion);
  }
  onDeleteEducacion(index: number) {
    let educacion: Educacion = this.educacionLista[index];
    if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
      this.educacionService.borrarEducacion(educacion.ideducacion).subscribe(
        () => {
          this.obtenerEducacion();
        }
      )
    }
  }
 
}
