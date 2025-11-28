// Implemente uma factory function responsável por criar objetos que representem contas
// bancárias. Cada conta deverá armazenar informações do cliente (nome e sobrenome), dados
// bancários (agência, número e tipo de conta) e ainda manter o controle interno de saldo através
// de variáveis privadas, protegidas por closure.
// A função deve retornar um objeto que contenha:
// Método de depósito, que aumenta o saldo interno.
// Método de saque, que permita retirar valores considerando o limite do cheque especial
// apenas quando o tipo da conta for “cc” (conta corrente). O método deve validar se o valor
// solicitado pode ser sacado com base no saldo + limite disponível.
// Getter verSaldo, que retorne o saldo atual sem permitir modificações externas.
// Getter nomeCompleto, que concatene nome e sobrenome do titular.
// Após criar uma conta, realize depósitos, tente diferentes valores de saque e, por fim, implemente
// uma função imprimir() para exibir os dados principais da conta, incluindo o nome completo,
// informações bancárias e o saldo atual.

function criarConta(nome,sobrenome,agencia,numero,tipo,limite){
    let saldo = 0;
    return {
        nome,
        sobrenome,
        agencia,
        numero,
        tipo,

        deposito : function(valor){
            if(valor>0) saldo+=valor
            else console.log("Valor invalido");
        },
        saque : function(valor){
            if (this.tipo === "cc") {
                if (valor <= saldo + limite) saldo -= valor;
                else console.log("Limite insuficiente");
            } else {
                if (valor <= saldo)saldo -= valor;
                else console.log("Saldo insuficiente");
            }
        },
        get verSaldo(){console.log(saldo)},
        get nomeCompleto(){return (this.nome+' '+this.sobrenome)},
        imprimir : function(){
            console.log("Nome completo:"+this.nome+" "+this.sobrenome+"\nAgencia:"
                + this.agencia+"\nNumero: "+this.numero+"\nTipo de conta:"+this.tipo+"\nSaldo:"+ saldo);
        }
    }
}

const pessoa = criarConta('Bernardo','Custodio','Itau',2041,'cc',40);
const pessoa2 = criarConta('Ana','Silva','Bradesco',1234,'cp',0);
//console.log(pessoa.verSaldo);
//console.log(pessoa.nomeCompleto);
pessoa.verSaldo;
pessoa.deposito(500);
pessoa.verSaldo;
pessoa.saque(100);
pessoa.verSaldo;

pessoa2.verSaldo;
pessoa2.deposito(600);
pessoa2.verSaldo;
pessoa2.saque(300);
pessoa2.verSaldo;

pessoa.verSaldo;
console.log()
//console.log(pessoa)
//console.log(pessoa2)

//console.log(pessoa.nomeCompleto)