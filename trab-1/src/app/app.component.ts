import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from './team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
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

}
