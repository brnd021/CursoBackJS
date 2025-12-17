// Implemente uma função recursiva somaArray(arr) que retorne a soma de todos os elementos do array.
// Não use loops (for, while). A função deve processar um elemento por chamada até o array ficar vazio.

function somaArray(array){
    const arr = [...array]
    if(arr.length === 0) return 0;
    if(arr.length === 1) return arr[0];
    if(arr.length === 2) return arr[0] + arr[1];
    arr[arr.length-2] += arr[arr.length-1];
    arr.pop()
    return somaArray(arr)
}

const array = [1,2,3,4]

console.log(somaArray(array))
console.log(array)