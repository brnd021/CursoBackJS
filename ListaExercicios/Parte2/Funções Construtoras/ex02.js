// Crie a função construtora ContaBancaria(titular, saldoInicial). O saldo deve ser privado usando
// closure. Exponha métodos públicos: depositar(valor), sacar(valor), getSaldo(). Garanta que a variável
// saldo não possa ser acessada externamente.

function ContaBancaria(titular, saldoInicial){
    let saldo = saldoInicial;
    this.titular = titular;
    this.depositar = function(valor){
        saldo += valor;
    };
    this.sacar = function(valor){
        try{
            if(saldo < valor ) throw new Error("Saldo insuficiente");
            saldo -= valor
        }catch(e){
            console.log(e);
        }
    };
    this.getSaldo = function(){
        console.log(`Saldo: $${saldo}`);
    }
}

const conta = new ContaBancaria("Bernardo",100);

conta.depositar(200);
conta.getSaldo()
conta.sacar(250);
conta.getSaldo();
// conta.sacar(400);
