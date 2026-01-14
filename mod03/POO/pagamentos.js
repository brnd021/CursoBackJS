class Pagamento{
    constructor(){
        if(new.target === Pagamento){
            throw new Error("A classe Pagmento e abstrata e nao deve ser diretamente instanciada.");
        }
    }
    processar(valor){
        throw new Error("O metodo processar deve ser implementado na subclasse");
    }
}

class PagamentoCartao extends Pagamento {
    processar(valor){
        console.log("Processando pagamento de R$"+(valor.toFixed(2))+" no cartao de credito");
    }
}

class PagamentoPix extends Pagamento {
    processar(valor){
        console.log("Processando pagamento de R$"+(valor.toFixed(2))+" no pix");
    }
}

class PagamentoBoleto extends Pagamento{
    processar(valor){
        console.log("Gerando boleto no valor de R$"+(valor.toFixed(2))+" para execucao do pagamento");
    }
}

function executarPagamento(objeto,valor){
    if(objeto && typeof objeto.processar === "function") objeto.processar(valor);
    else console.log("Error: o objeto informado nao possui o metodo processar.")
}

const pagamentoGenerico = {
    processar(valor){
        console.log('O pagamento $'+(valor.toFixed(2))+", foi feito em dinheiro");
    }
}

const pagCartao = new PagamentoCartao();
const pagPix = new PagamentoPix();
const pagBoleto = new PagamentoBoleto();

executarPagamento(pagCartao,300);
executarPagamento(pagPix,230);
executarPagamento(pagBoleto,259);
executarPagamento(pagamentoGenerico,500);