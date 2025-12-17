// Crie a função filtrar(array, callback) que retorna um novo array apenas com os elementos para os quais
// o callback devolve true. Não use .filter(). Teste com diferentes callbacks, como:
//  números pares
//  strings com mais de 5 caracteres
//  objetos com determinada propriedade

function filtrar(array,callback){
    const newArray = []
    array.forEach(e=>{
        if(callback(e)) newArray.push(e)
    })
    return newArray
}

function pares(e){
    return typeof e === "number" && e % 2 === 0;
}

function strings(e){
    return typeof e === "string" && e.length > 5;
}

function object(e){
   return typeof e === "object" && e !== null && Object.hasOwn(e, "nome");
}

const dados = [1,2,3,4,5,6,7,8,9,10,
    "casa","cidade","tempo","monitor","arvore",
    {nome: "Bernardo", idade: 22},
    {produto: "Celular", preco: 5000}
]

console.log(filtrar(dados,pares))
console.log(filtrar(dados,strings))
console.log(filtrar(dados,object))