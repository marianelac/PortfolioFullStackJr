import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/interfaces/persona';
import { LoginService } from 'src/app/servicios/login.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styleUrls: ['./fin.component.css']
})
export class FinComponent implements OnInit {

 persona!:Persona; 


  constructor(private portfolioService: PortfolioService, private formBuilder:FormBuilder, private loginservice:LoginService) { 
   
  }
login:any;

getById(id:number){
  this.portfolioService.getById(4).subscribe(
    data=> {this.persona = data}
  )

}
  ngOnInit(): void {
    this.loginservice.LogState().subscribe((login)=>(this.login = login));
    this.getById(4);
  }

  


}
