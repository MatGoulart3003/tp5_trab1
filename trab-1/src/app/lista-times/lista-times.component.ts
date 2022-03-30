import { Component, OnInit } from '@angular/core';
import { Team } from '../CadastroTimes/team';

@Component({
  selector: 'app-lista-times',
  templateUrl: './lista-times.component.html',
  styleUrls: ['./lista-times.component.css']
})
export class ListaTimesComponent implements OnInit {
 
  TeamList: Team []=[]
  newTeam = {} as Team

  voting(i: number){
    this.TeamList[i].votes++;
    this.TeamList.sort(this.sortTeam)
    localStorage.setItem("BD-Times", JSON.stringify(this.TeamList))
  }

  sortTeam = (a:Team,b: Team) => b.votes - a.votes

  catchData (){    

    if(localStorage.getItem("BD-Times")){          
      this.TeamList = JSON.parse(localStorage.getItem("BD-Times")!)

    }else{
      this.TeamList = []
    }

  }


  constructor() { }
  
  ngOnInit(): void {
    this.catchData();
  }

}
