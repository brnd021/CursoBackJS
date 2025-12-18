// Crie a função recursiva contarOcorrencias(arr, elemento) que conte quantas vezes um valor aparece
// em um array, analisando os itens um a um de forma recursiva.

function contarOcorrencias(arr, elemento){

    if (arr.length === 0) return 0;
    const conta = arr[0] === elemento ? 1 : 0;
    return conta + contarOcorrencias(arr.slice(1), elemento);
}

console.log(contarOcorrencias([1,2,2,3,2,4,4,6],2))