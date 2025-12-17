// Implemente a função mapear(array, callback) reproduzindo o comportamento básico de .map(). Use o
// callback para transformar cada elemento. Teste com diferentes transformações:
//  elevar ao quadrado
//  extrair um campo de objetos
//  converter valores numéricos para strings formatadas

function mapear(array,callback){
    const newArray = []
    array.forEach((e)=>{
        newArray.push(callback(e));
    });
    return newArray
}

function square(e){
    return typeof e === "number" ? Math.pow(e,2) : e
}

function toStrings(e) {
  return typeof e === "number" ? String(e) : e;
}

function object(e){
   return (typeof e === "object" && e !== null) ? Object.keys(e) : e;
}
const dados = [1,2,3,4,5,6,7,8,9,10,
    "casa","cidade","tempo","monitor","arvore",
    {nome: "Bernardo", idade: 22},
    {produto: "Celular", preco: 5000}
]

console.log(mapear(dados,square));
// console.log(mapear(dados,toStrings));
// console.log(mapear(dados,object));