function criarContador(num){
    let contador = 0;
    return function(){
        contador+=num;
        console.log(contador);
    }
}

let c1 = criarContador(2);
let c2 = criarContador(5);

c1();
c1();
c1();
c2();
c2();