export class Cliente {
    idCliente:  number;
    nome: string;
    cpf: string;
    rg: string;
    email: string;
    telCel: string;
    telFixo: string;

    constructor(idCliente?:number, nome?:string, cpf?:string, 
        rg?:string, email?:string, telCel?:string, telFixo?:string){
            this.idCliente = idCliente;
            this.nome = nome;
            this.cpf = cpf;
            this.rg = rg;
            this.email = email;
            this.telCel = telCel;
            this.telFixo=telFixo;
        }

}