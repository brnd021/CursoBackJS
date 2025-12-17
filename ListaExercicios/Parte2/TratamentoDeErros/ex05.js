// Implemente a função buscarElemento(lista, indice) que:
//  retorne o elemento de lista[indice];
//  se o índice for inválido (fora dos limites), lance um erro personalizado: "Índice fora do intervalo
// válido."
//  capture o erro com catch;
//  utilize finally para exibir: "Busca encerrada."

function buscarElemento(lista,indice){
    if(indice > (lista.length-1))
        throw new Error("Índice fora do intervalo válido.");
    return lista[indice];
}

const cores = ["amarelo","vermelho","azul","roxo","verde"];

try{
    // console.log(buscarElemento(cores,5));
    console.log(buscarElemento(cores,4));
}catch(e){
    console.log(e);
}