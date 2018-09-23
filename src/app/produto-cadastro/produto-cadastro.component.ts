import { Component, OnInit } from '@angular/core';
import { Produto } from '../Entities/produto';
import { ProdutoProvider } from '../servicos/produto.servico';

@Component({
  selector: 'produto-cadastro',
  templateUrl: './produto-cadastro.component.html'
})
export class ProdutoCadastroComponent implements OnInit {

  produto: Produto;

  constructor(private service: ProdutoProvider) { 
    this.produto = new Produto();
  }  

  ngOnInit() {
  }

  insertProduto(){
    return this.service.grava(this.produto);
}


}
