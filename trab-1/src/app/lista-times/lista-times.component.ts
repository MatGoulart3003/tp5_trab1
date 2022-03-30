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
  }

  sortTeam = (a:Team,b: Team) => b.votes - a.votes

  catchData (){    

    if(localStorage.getItem("BD-Times")){
      
      const aux = localStorage.getItem("BD-Times")
      console.log("primeiro " + aux)
      console.log(JSON.parse(aux!))
      this.TeamList = JSON.parse(aux!)

    }else{
      this.TeamList = []
    }

  }


  constructor() { }
  
  ngOnInit(): void {
    this.catchData();
  }

}
