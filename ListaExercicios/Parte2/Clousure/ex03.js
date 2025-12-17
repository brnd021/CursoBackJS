// Implemente a função criarSaudacao(saudacao) que retorna outra função.
// A função retornada deve receber um nome e montar a frase completa usando a saudação original.
// Exemplo de uso:

// const ola = criarSaudacao("Olá");
// console.log(ola("Diego")); // "Olá, Diego!"

// O objetivo é mostrar como capturar valores externos via closure.

function criarSaudacao(saudacao){
    return function(nome){
        return `${saudacao} ${nome}, tudo bem?`;
    }
}

const bomDia = criarSaudacao("Bom dia");

console.log(bomDia("Bernardo"));