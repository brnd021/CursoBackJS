// Implemente fatorial(n) usando recursão. Adicione duas validações:
//  impedir valores negativos
//  impedir valores não inteiros
// Se o valor for inválido, retorne uma mensagem apropriada.

function fatorial(n){
    if(n<0 || !(Number.isInteger(n))) return "Erro na aplicação!"
    if(n === 0 ) return 1
    return n * fatorial(n-1);
}

console.log(fatorial(4))