import { Component, OnInit } from '@angular/core';
import { ProdutoProvider } from '../servicos/produto.servico';
import { Produto } from '../Entities/produto';


@Component({
  selector: 'produto-consulta',
  templateUrl: './produto-consulta.component.html'
})
export class ProdutoConsultaComponent implements OnInit {

  produto: Produto;
  
  constructor(private service: ProdutoProvider) {
      this.produto = new Produto();
      console.log(this.service.listarProduto());
   }

  ngOnInit() {
  }

  findAll(){
    return this.service.listarProduto();
  }

  findById(id: number){
    return this.service.listarPorId(id);
  }

  detete(id: number){
    return this.service.excluirProduto(id);
  }

}
