// Crie um contador encapsulado em uma IIFE que retorne um objeto com métodos incrementar,
// decrementar e valor. O estado interno do contador deve permanecer inacessível fora da função
// imediata.

const contador = (function(){
    let valor = 0
    return {
        incrementar(e){
            valor += e
        },
        decrementar(e){
            valor -=e
        },
        valor(){
            return valor
        }
    }
})()

contador.incrementar(5)
contador.decrementar(8)
console.log(contador.valor())
contador.incrementar(6)
contador.decrementar(2)
console.log(contador.valor())