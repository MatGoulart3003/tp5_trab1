import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamCompComponent } from './CadastroTimes/team-comp.component';
import { ListaTimesComponent } from './lista-times/lista-times.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GraficoTimesComponent } from './grafico-times/grafico-times.component';



@NgModule({
  declarations: [
    AppComponent,
    TeamCompComponent,
    ListaTimesComponent,
    TelaLoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    GraficoTimesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
