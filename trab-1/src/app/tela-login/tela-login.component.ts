import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  
  user = {} as Admin
  
  login(){

    if(this.user.nameAdmin === "ADMIN" || this.user.senhaAdmin === "ADMIN"){
      console.log("deu certo")
    }else{
      console.log("voce errou")
    }
    
  }
  ngOnInit(): void {
    
  }

}
