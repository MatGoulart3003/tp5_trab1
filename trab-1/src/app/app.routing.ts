import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TeamCompComponent } from "./CadastroTimes/team-comp.component";
import { HomeComponent } from "./home/home.component";
import { ListaTimesComponent } from "./lista-times/lista-times.component";
import { TelaLoginComponent } from "./tela-login/tela-login.component";



const APP_ROUTES: Routes = [

    { path: 'CadastroTimes', component: TeamCompComponent },
    { path: 'lista-times', component: ListaTimesComponent },
    { path: 'tela-login', component: TelaLoginComponent },
    { path: '', component: HomeComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);