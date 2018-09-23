import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../Entities/cliente';
import { ClienteProvider } from '../servicos/cliente.servico';

@Component({
  selector: 'cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html'
})

export class ClienteCadastroComponent implements OnInit {
  
  cliente: Cliente;

  constructor(private service: ClienteProvider) {
    this.cliente = new Cliente();
  }

  ngOnInit() {
  }

  insertCliente(){
    return this.service.gravar(this.cliente);
  }

}
