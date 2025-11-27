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
        nome,sobrenome,agencia,numero,tipo,
        deposito : function(valor){return saldo+=valor},
        saque : function(valor){
            if (this.tipo === "cc") {
                if (valor <= saldo + limite) saldo -= valor;
                else console.log("Limite insuficiente");
            } else {
                if (valor <= saldo)saldo -= valor;
                else console.log("Saldo insuficiente");
            }
        },
        get verSaldo(){return saldo},
        get nomeCompleto(){return (this.nome+' '+this.sobrenome)},
        imprimir : function(){
            console.log(`Nome completo:${this.nome} ${this.sobrenome}, 
Agencia:${this.agencia},
Numero:${this.numero},
Tipo de conta:${this.tipo}
Saldo: ${saldo}`)
            }
        }
    }


const pessoa = criarConta('Bernardo','Custodio','Itau',2041,'cc',40);

console.log(pessoa.verSaldo);
console.log(pessoa.nomeCompleto);
pessoa.imprimir();