class ContaBancaria{
    #numero;
    #titular;
    #saldo = 0;
    constructor(numero,titular){
        this.#numero= numero;
        this.#titular = titular;
    }
    depositar(valor){
        if(valor <=0 ) throw new Error ("Impossivel deposito de valores negativos.");
        else this.#saldo += valor;
    }
    sacar(valor){
        if(this.#saldo < valor) throw new Error ("Saldo indisponivel.");
        else this.#saldo -= valor;
    }
    get saldo(){
        return this.#saldo;
    }
    get titular(){
        return this.#titular;
    }
    set titular(nome){
        if(nome.length < 3) throw new Error ("Nome do titular deve possuir ao menos 3 caracteres.");
        else this.#titular = nome;
    }
    get numero(){
        return this.#numero;
    }
}


const conta1 = new ContaBancaria(283828,"Bernardo");

console.log(conta1.saldo);
console.log(conta1.titular);
console.log(conta1.numero);
conta1.titular = "Sidiney";
conta1.depositar(200);
console.log(conta1.titular);
console.log(conta1.saldo)
