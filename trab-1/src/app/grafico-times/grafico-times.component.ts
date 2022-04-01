import { Component, OnInit } from '@angular/core';
import { ColunaModel } from "src/models/colunaModel"
import { Team } from '../CadastroTimes/team';
import { ListaTimesComponent } from '../lista-times/lista-times.component';

@Component({
  selector: 'app-grafico-times',
  templateUrl: './grafico-times.component.html',
  styleUrls: ['./grafico-times.component.scss']
})
export class GraficoTimesComponent implements OnInit {

  public colunas : Array<ColunaModel> = [];

  teamList: Team []=[] 
  valores: any = []
  total = 0 
  porcentagem: any = []
  

  constructor() { }

  ngOnInit(): void {
    this.catchData();
    this.populaValores();



    
    this.carregaColunas();
  }

  populaValores (){

    for(let i = 0; i < this.teamList.length; i++){

      this.valores[i] = this.teamList[i].votes
      this.total = this.total + this.valores[i]
      
    }
    console.log(this.total)

    for(let i = 0; i < this.valores.length; i++){

      var xuxa = (this.valores[i] / this.total) * 100
      this.porcentagem[i] = xuxa.toFixed(2)
    }

  }

  catchData (){    

    if(localStorage.getItem("BD-Times")){          
      this.teamList = JSON.parse(localStorage.getItem("BD-Times")!)

    }else{
      this.teamList = []
    }

  }

  carregaColunas() {
    var lista = [];
    
    for (let index = 0; index < this.porcentagem.length ; index++) {
      var coluna = new ColunaModel();
      coluna.porcentagem = this.porcentagem[index];
      coluna.descricao = this.teamList[index].name;
      
      lista.push(coluna);
    }

    this.colunas = lista;

  }

  montaPorcentagemColuna(valor : any)
  {
    return valor + "%";
  }




}
