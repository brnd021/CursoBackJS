// Implemente a classe ContaBancaria:
//  construtor recebe titular e saldoInicial
//  método depositar(valor)
//  método sacar(valor)
//  lançar erro se valor for maior que o saldo
//  método verSaldo() que retorna o saldo atual

class ContaBancaria{
    constructor(titular,saldoInicial){
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    depositar(valor){   this.saldo += valor;  }
    sacar(valor){
        try{
            if(valor>this.saldo) throw new Error ("Saldo insuficiente");
            this.saldo -= valor;
        }catch(e){   console.log(e);   }
    }
    verSaldo(){   return "Saldo da conta: "+this.saldo;   }
}

const conta1 = new ContaBancaria("Bernardo",100);

// conta1.sacar(150);
conta1.depositar(200);
console.log(conta1.verSaldo())