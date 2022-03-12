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


  saveData(form: NgForm) { 
    this.teamList.push(this.newTeam)
    this.newTeam = {} as Team
    this.newTeam.votes = 0
    form.resetForm()
  }
  sumVote(){
    console.log("passei aqui")
    this.newTeam.votes++
    
  }


  ngOnInit(): void {
  }

}
