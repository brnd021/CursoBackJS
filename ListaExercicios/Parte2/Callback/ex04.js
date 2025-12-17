function pipeline(valorInicial,...funcoes){
    let resultado = valorInicial
    funcoes.forEach(fn=>resultado = fn(resultado))
    return resultado
}

function sum(e){
    return e + 10;
}

function cube(e){
    return Math.pow(e,3);
}

function multiplica(e){
    return e * 20;
}

function toString(e){
    return String(e);
}

console.log(pipeline(5,sum,cube,multiplica,toString))