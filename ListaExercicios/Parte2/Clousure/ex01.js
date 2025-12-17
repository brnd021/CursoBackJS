// Implemente uma função criarContador(inicial, passo) que utiliza closure para gerar um contador
// privado. A função deve retornar um objeto com três métodos:
//  incrementar() – soma o passo ao valor.
//  valor() – retorna o valor atual.
//  resetar() – volta ao valor inicial.
// O estado interno não deve ser acessível diretamente.

function criaContador(inicial,passo){
    let contador = inicial;
    return {
        incrementar: function(){ contador += passo},
        valor: function(){return contador},
        resetar: function(){contador = inicial}
    };
}

const contador = criaContador(5,3);

contador.incrementar();
contador.incrementar();
console.log(contador.valor());
contador.resetar();
console.log(contador.valor());