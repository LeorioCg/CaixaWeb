import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Entities/cliente';
import { Observable } from 'rxjs';



@Injectable()
export class ClienteProvider {

    
    constructor(public http: HttpClient){}


listarClientes() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3001/clientes');
}

listarPorId(id){
    return this.http.get<Cliente>('http://localhost:3001/cliente', id);
}

gravar(cliente: Cliente) {
    return this.http.post('http://localhost:3001/cliente', cliente);
}

deletarCliente(id){
    return this.http.delete('http://localhost:3001/cliente', id);
}


}