// Crie uma função memorizar(fn) que receba uma função e retorne uma nova função que armazena em
// cache os resultados de chamadas anteriores. Use closure para manter um dicionário privado de entradas
// e saídas. Teste com uma função lenta, como cálculo recursivo de Fibonacci.

function memorizar(fn){
    const cache = new Map();
    return function(e){
       cache.set(e,fn(e));
       return cache;
    }
}

function fibonacci(n){
    if (n < 2) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

const fiboMap = memorizar(fibonacci);

console.log(fiboMap(4));
console.log(fiboMap(6));