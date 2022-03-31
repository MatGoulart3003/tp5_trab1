import {  NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { TeamCompComponent } from './CadastroTimes/team-comp.component';
import { GraficoTimesComponent } from './grafico-times/grafico-times.component';
import { HomeComponent } from './home/home.component';
import { ListaTimesComponent } from './lista-times/lista-times.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';


const  routes: Routes = [

  { path: 'CadastroTimes', component: TeamCompComponent },
  { path: 'lista-times', component: ListaTimesComponent },
  { path: 'tela-login', component: TelaLoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'grafico-times', component: GraficoTimesComponent},
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
