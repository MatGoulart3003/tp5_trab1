import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from './team';


@Component({
  selector: 'app-team-comp',
  templateUrl: './team-comp.component.html',
  styleUrls: ['./team-comp.component.css']
})
export class TeamCompComponent implements OnInit {
 
  newTeam = {} as Team
  
  teamList: Team []=[]
  data : any
   
  saveData(form: NgForm) { 
   
    this.teamList.push(this.newTeam)
    this.newTeam.votes = 0
    localStorage.setItem("BD-Times", JSON.stringify(this.teamList))
    this.newTeam = {} as Team  
    form.resetForm()
  }
  
  ngOnInit(): void {
    
    this.data = localStorage.getItem("BD-Times")
    if (this.data){
      this.teamList = JSON.parse(this.data)
    }
  }

}
