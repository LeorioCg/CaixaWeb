import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../Entities/produto";

@Injectable()
export class ProdutoProvider {


    constructor(public http: HttpClient) {
        
    }
//SEMPRE CORRIGIR O CAMINHO DO BANCO......
    public listarProduto(): Observable<Produto[]> {
        return this.http.get<Produto[]>('http://localhost:3001/produtos');
    }

    public grava(produto: Produto){
        return this.http.post('http://localhost:3001/produto', produto);
    }

    public listarPorId(id){
        return this.http.get<Produto>('http://localhost:3001/produto/id', id);
    }

    public excluirProduto(id){
        return this.http.get<Produto>('http://localhost:3001/produto/excluir', id);
    }
    
}