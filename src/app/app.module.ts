import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { SharedComponent } from './shared/shared.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProdutoProvider } from './servicos/produto.servico';
import { ProdutoConsultaComponent } from './produto-consulta/produto-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoCadastroComponent,
    SharedComponent,
    ProdutoConsultaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    FormsModule
  ],
  providers: [ProdutoProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
