// Crie a função dividir(a, b) que:
//  lança um erro se b === 0;
//  lança um erro se algum dos argumentos não for numérico;
//  retorna o resultado da divisão se estiver tudo correto.
// Em seguida, escreva um código que teste valores válidos e inválidos dentro de try...catch.

function dividir(a,b){
    if(typeof a !== "number" || typeof b !== "number") throw new Error("Valor inserido não é número");
    if(b === 0) throw new Error("Divisor não pode ser igual a zero");
    return a/b;
}

try{
    // console.log(`Divisão por zero ${dividir(10,0)}`);
    // console.log(`Divisão com string ${dividir("10",5)}`);
    console.log(`Divisão correta: ${dividir(10,5)}`);
}catch(e){
    console.log(e);
}   