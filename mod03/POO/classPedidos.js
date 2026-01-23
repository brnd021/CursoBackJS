class Pedidos{
    constructor(lista){
        this.pedidos = lista
    }
    calcularTotal(){

    }
    finalizarPedido(){

    }
}

class PedidoVazioError extends Error{
    constructor(mensagem){
        super(mensagem);
        this.name = this.constructor.name;
    }
}