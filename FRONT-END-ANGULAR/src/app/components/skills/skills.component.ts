import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Skills } from 'src/app/interfaces/skills';
import { LoginService } from 'src/app/servicios/login.service';

import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skillsLista:Skills[]=[];

skillForm:FormGroup;
 
  
  constructor(private skillservice: SkillsService, private formBuilder: FormBuilder, private loginservice:LoginService) {
    this.skillForm = this.formBuilder.group({
      idskills:[''],
      porcentaje:['', [Validators.required]],
      area:['', [Validators.required]],
      habilidadTipo:['',[Validators.required]],
      persona:[4]
    });
   }
login:any;
  ngOnInit(): void {
    this.loginservice.LogState().subscribe((login)=>(this.login = login));
    this.obtenerSkills();
    console.log(this.login);
    }

    public obtenerSkills():void{
      this.skillservice.obtenerSkills().subscribe({
        next: (response: Skills[])=>{
          this.skillsLista=response;
        },
        error: (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }
    private clearForm() {
      this.skillForm.setValue({
        idskills: '',
        area: '',
        porcentaje: '',
        habilidadTipo:'',
        persona:'4'
      })
    }
    private loadForm(skills: Skills) {
      this.skillForm.setValue({
        idskills: skills.idskills,
        area: skills.area,
        porcentaje: skills.porcentaje,
        habilidadTipo: skills.habilidadTipo,
        persona:skills.persona
      })
    }
    onSubmit() {
      let skills: Skills = this.skillForm.value;
      if (this.skillForm.get('idskills')?.value == '') {
        this.skillservice.agregarSkills(skills).subscribe(
          (newSkill: Skills) => {
            this.skillsLista.push(newSkill);
          }
        );
      } else {
        this.skillservice.editarSkills(skills.idskills, skills).subscribe(
          () => {
            this.obtenerSkills();
          }
        )
      }
    }
    onNewSkill() {
      this.clearForm();
    }
    onEditSkill(index: number) {
      let skills: Skills = this.skillsLista[index];
      this.loadForm(skills);
    }
    onDeleteSkill(index: number) {
      let skills: Skills = this.skillsLista[index];
      if (confirm("¿Está seguro que desea borrar el skill seleccionado?")) {
        this.skillservice.borrarSkills(skills.idskills).subscribe(
          () => {
            this.obtenerSkills();
          }
        )
      }
    }
}



