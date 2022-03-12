import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamCompComponent } from './CadastroTimes/team-comp.component';
import { ListaTimesComponent } from './lista-times/lista-times.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamCompComponent,
    ListaTimesComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
