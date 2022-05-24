import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Redes } from 'src/app/interfaces/redes';
import { LoginService } from 'src/app/servicios/login.service';
import { RedesServiceService } from 'src/app/servicios/RedesService.service';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styleUrls: ['./fin.component.css']
})
export class FinComponent implements OnInit {

public redesLista:Redes[]=[];
redesForm:FormGroup;
  constructor(private redesService: RedesServiceService, private formBuilder:FormBuilder, private loginservice:LoginService) { 
    this.redesForm = this.formBuilder.group({
      idredes: [''],
      github: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
      instagram: ['', [Validators.required]],
      persona: [4]
    });
  }
login:any;
  ngOnInit(): void {
    this.loginservice.LogState().subscribe((login)=>(this.login = login));
    this.obtenerRedes();
    console.log(this.login);
  }

  public obtenerRedes():void{
    this.redesService.obtenerRedes().subscribe({
      next: (response: Redes[]) =>{
        this.redesLista=response;
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
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
      this.redesService.agregarRed(redes).subscribe(
        (newRedes: Redes) => {
          this.redesLista.push(newRedes);
        }
      );
    } else {
      this.redesService.editarRed(redes.idredes, redes).subscribe(
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
      this.redesService.borrarRed(redes.idredes).subscribe(
        () => {
          this.obtenerRedes();
        }
      )
    }
  }
}
