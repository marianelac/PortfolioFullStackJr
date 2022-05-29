import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FinComponent } from './components/fin/fin.component';
import { LoginComponent } from './login/login.component';

import { Pagina404Component } from './pagina404/pagina404.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes:Routes =[
  {path: 'inicio', component: PortfolioComponent},
  {path: 'redes', component: FinComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: Pagina404Component},
]

@NgModule({
  
  imports: [
  RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
