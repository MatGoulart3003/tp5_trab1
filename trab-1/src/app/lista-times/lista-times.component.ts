import { Component, OnInit } from '@angular/core';
import { Team } from '../CadastroTimes/team';

@Component({
  selector: 'app-lista-times',
  templateUrl: './lista-times.component.html',
  styleUrls: ['./lista-times.component.css']
})
export class ListaTimesComponent implements OnInit {

 
  TeamList: Team []=[]
  aux: string = ""  

  catchData (){

    this.aux = JSON.stringify(localStorage.getItem("BD-Times"))

    if(localStorage.getItem("BD-Times")){
      console.log("passei aqui")
      this.TeamList = JSON.parse(this.aux);
    }else{
      this.TeamList = []
    }

  }


  constructor() { }
  
  ngOnInit(): void {
    this.catchData();
  }

}
