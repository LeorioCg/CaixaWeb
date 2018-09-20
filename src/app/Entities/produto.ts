export class Produto {
    idProduto: number;
    nomeProduto: string;
    descricao: string;
    fabricante: string;
    valorCusto: number;
    valorPdv: number;    
    quantidade: number;

    constructor(idProduto?:number, nomeProduto?:string, descricao?:string, fabricante?:string, 
        valorCusto?:number, valorPdv?:number, quantidade?:number ) {
            this.idProduto=idProduto;
            this.nomeProduto=nomeProduto;
            this.descricao=descricao;
            this.fabricante=fabricante;
            this.valorCusto=valorCusto;
            this.valorPdv=valorPdv;            
            this.quantidade=quantidade;
        }
}