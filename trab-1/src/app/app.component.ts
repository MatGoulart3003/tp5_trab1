import { Component } from '@angular/core';
import { Team } from './team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  myTeam : Team

  constructor() { 
    this.myTeam = {} as Team
    this.myTeam.name = "corinthians"
    this.myTeam.votes =  10
  }

}
