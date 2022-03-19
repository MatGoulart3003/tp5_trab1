import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  user = {} as Admin

  doLogin() {

    if (this.user.nameAdmin === "admin" || this.user.senhaAdmin === "admin") {
      window.location.href ="CadastroTimes"
    }
    else {
      alert('Login e/ou senha inválido(s)')
    }
  }
  ngOnInit(): void {

  }

}
