function fibonacci(n){
    if (n < 2) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

function gerarSequencia(qtd){
    let array = [];
    for(let i = 0; i<qtd;i++){
        array.push(fibonacci(i))
    }
    return array;
}
console.log(gerarSequencia(26))
console.log(fibonacci(10))


//A sequência de Fibonacci é uma série numérica onde cada número é a soma dos dois números anteriores,
//começando por 0 e 1. A fórmula básica é: F(n) = F(n-1) + F(n-2), com os valores iniciais F(0) = 0 e F(1) = 1.

//Exemplo dos primeiros números da sequência: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...