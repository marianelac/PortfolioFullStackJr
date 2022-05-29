import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { LoginService } from 'src/app/servicios/login.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  
  public experienciaLista: Experiencia[] = [];

  experienciaForm: FormGroup;
  

 

  constructor(
    private experienciaservice: ExperienciaService,
    private loginservice:LoginService,
    private formBuilder: FormBuilder) {
    this.experienciaForm = this.formBuilder.group({
      idexperiencia: [''],
      puesto: ['', [Validators.required]],
      descripciontareas: ['', [Validators.required]],
      empresanombre: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      fechainicio:['', [Validators.required]],
      fechafin:['', [Validators.required]],
      persona: [4]
    });
  }
login:any;
  ngOnInit(): void {
    this.loginservice.LogState().subscribe((login) =>(this.login = login));
    this.obtenerExperiencia();
    console.log(this.login);

    

  }

  public obtenerExperiencia(): void {
    this.experienciaservice.obtenerExperiencia().subscribe({
      next: (response: Experiencia[]) => {
        this.experienciaLista = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  private clearForm() {
    this.experienciaForm.setValue({
      idexperiencia: '',
      puesto: '',
      descripciontareas: '',
      empresanombre: '',
      logo: '',
      fechainicio:'',
      fechafin:'',
      persona:4
    })
  }

  private loadForm(experiencia: Experiencia) {
    this.experienciaForm.setValue({
      idexperiencia: experiencia.idexperiencia,
      puesto: experiencia.puesto,
      descripciontareas:experiencia.descripciontareas,
      empresanombre:experiencia.empresanombre,
      logo:experiencia.logo,
      fechainicio:experiencia.fechainicio,
      fechafin:experiencia.fechafin,
      persona:experiencia.persona
    })
  }
  onSubmit() {
    let experiencia: Experiencia = this.experienciaForm.value;
    if (this.experienciaForm.get('idexperiencia')?.value == '') {
      this.experienciaservice.agregarExperiencia(experiencia).subscribe(
        (newExperiencia: Experiencia) => {
          this.experienciaLista.push(newExperiencia);
        }
      );
    } else {
      this.experienciaservice.editarExperiencia(experiencia.idexperiencia, experiencia).subscribe(
        () => {
          this.obtenerExperiencia();
        }
      )
    }
  }
  onNewExperiencia() {
    this.clearForm();
  }
  onEditExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaLista[index];
    this.loadForm(experiencia);
  }

  onDeleteExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaLista[index];
    if (confirm("¿Está seguro que desea borrar la experiencia seleccionada?")) {
      this.experienciaservice.borrarExperiencia(experiencia.idexperiencia).subscribe(
        () => {
          this.obtenerExperiencia();
        }
      )
    }
  }

}
