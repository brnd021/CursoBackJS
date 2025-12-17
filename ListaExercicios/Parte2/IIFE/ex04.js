// Implemente uma IIFE que receba um número inicial e retorne uma função que soma esse número a
// qualquer valor passado posteriormente. Exemplo:
const somar10 = ((n)=>{
    return function(num){
        return n + num
    }
})(10)

console.log(somar10(5))
console.log(somar10(3))
console.log(somar10(9))
console.log(somar10(6))