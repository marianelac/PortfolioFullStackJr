import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { PortfolioComponent } from './portfolio/portfolio.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FinComponent } from './components/fin/fin.component';
import { LoginComponent } from './login/login.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InterceptorService } from './servicios/interceptor.service';
import { EducacionService } from './servicios/educacion.service';
import { RedesServiceService } from './servicios/RedesService.service';
import { ExperienciaService } from './servicios/experiencia.service';
import { ProyectosService } from './servicios/proyectos.service';
import { SkillsService } from './servicios/skills.service';
import { EncabezadoModalComponent } from './modal/encabezado-modal/encabezado-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    EncabezadoComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SkillsComponent,
    FinComponent,
    LoginComponent,
    Pagina404Component,
    NavbarComponent,
    EncabezadoModalComponent
    
],
  imports: [
    BrowserModule,
     // Specify ng-circle-progress as an import
     NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      titleColor: "white",
      unitsColor: "white",
      subtitleColor: "white"
    
    }),
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule
    
   ],
  providers: [PortfolioService, EducacionService, RedesServiceService, ExperienciaService, ProyectosService, SkillsService 
    ,
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
