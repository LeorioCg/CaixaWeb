import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { SharedComponent } from './shared/shared.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProdutoProvider } from './servicos/produto.servico';
import { ProdutoConsultaComponent } from './produto-consulta/produto-consulta.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteProvider } from './servicos/cliente.servico';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoCadastroComponent,
    SharedComponent,
    ProdutoConsultaComponent,
    ClienteCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    FormsModule
  ],
  providers: [ProdutoProvider, ClienteProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
