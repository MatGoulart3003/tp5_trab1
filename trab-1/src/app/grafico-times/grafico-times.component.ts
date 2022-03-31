import { Component, OnInit } from '@angular/core';
import { ColunaModel } from "src/models/colunaModel"

@Component({
  selector: 'app-grafico-times',
  templateUrl: './grafico-times.component.html',
  styleUrls: ['./grafico-times.component.scss']
})
export class GraficoTimesComponent implements OnInit {

  public colunas : Array<ColunaModel> = [];

  constructor() { }

  ngOnInit(): void {
    this.carregaColunas();
  }

  carregaColunas() {
    var lista = [];
    var valores = [60, 9, 100, 20, 75, 33, 39, 50, 18, 59, 33, 44, 12, 10]

    for (let index = 0; index < valores.length ; index++) {
      var coluna = new ColunaModel();
      coluna.porcentagem = valores[index];
      coluna.descricao = " Coluna - bar - " + index;

      lista.push(coluna);
    }

    this.colunas = lista;

  }

  montaPorcentagemColuna(valor : any)
  {
    return valor + "%";
  }

}
