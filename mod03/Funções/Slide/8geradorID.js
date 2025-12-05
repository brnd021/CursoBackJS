function* geradorID(){
    let i = 1;
    for(;;){
        yield i;
        i++;
    }
}

function criaUsuarios(qtd){
    const array = [];
    const gerador = geradorID();
    let i = 0;
    while(i<qtd){
        let id = gerador.next().value;
        array.push({id: id, nome: `Usuário ${id}`});
        i++;
    }
    return array;
}


console.log(criaUsuarios(5))
