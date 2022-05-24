import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

import { Persona } from 'src/app/interfaces/persona';
import { EncabezadoModalComponent } from 'src/app/modal/encabezado-modal/encabezado-modal.component';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { LoginService } from 'src/app/servicios/login.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  persona!: Persona;

  constructor(private portfolioService: PortfolioService, private formBuilder:FormBuilder,private modalService: NgbModal, private loginservice:LoginService) { }
   login:any;

   getById(id: number) {
    this.portfolioService.getById(4).subscribe (
			data => { this.persona = data;
      //console.log(this.persona)        
      }
		);
  }
  
  update(id: number, profile: any) {
      this.portfolioService.editarPersona(id,this.persona).subscribe (
        data => { this.persona = data; }
      );
    }


  ngOnInit(): void {
this.loginservice.LogState().subscribe((login)=>(this.login = login));
this.getById(4);
  }

  abrirModal(id:any){
    console.log(id)
    const modalRef = this.modalService.open(EncabezadoModalComponent, { centered: true }   );       
    modalRef.componentInstance.id = id; 
    //viendo
    modalRef.result.then((yes) => {
      console.log("Yes Click");
  
      this.getById(4);
    },
      (cancel) => {
        console.log("Cancel Click");
  
      })
  }

     
  
   
 
 
 

}



