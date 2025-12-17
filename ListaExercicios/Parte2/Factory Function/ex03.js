// Implemente a função criarCalculadora(inicial) que retorne um objeto com:
//  somar(x)
//  subtrair(x)
//  multiplicar(x)
//  dividir(x)
//  valor()
// A calculadora deve manter o estado interno acumulado usando closure.

function criarCalculadora(inicial){
    let valor = inicial;
    return {
        somar(x){
            valor = valor + x;
        },
        subtrair(x){
            valor = valor - x;
        },
        multiplicar(x){
            valor = valor * x;
        },
        dividir(x){
            try{
                if(x === 0)throw new Error("Divisao por 0");
                valor = valor / x;
            }catch(e){
                console.log(e)
            }

        },
        valor(){ return valor;}
    }
}

const calc = criarCalculadora(10);

calc.somar(5);
calc.multiplicar(2);
calc.subtrair(10);
console.log(calc.valor()); 

calc.dividir(0);