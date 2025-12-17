// Implemente acessarPropriedade(obj, chave) que:
//  lança um erro se obj não for um objeto;
//  lança um erro se a chave não existir;
//  retorna o valor da propriedade quando válida.
// Teste a função com try...catch usando objetos incompletos e tipos incorretos.

function acessarPropriedade(obj,chave){
    if(typeof obj !== "object" || Array.isArray(obj) || obj === null)
        throw new Error("Parâmetro informado não é um objeto válido");
    if(!(obj[chave]))throw new Error("Chave não existe neste objeto");
    return obj[chave];
}
const objeto = {
    nome: "Bernardo",
    idade: 22
};
const array = [{
    nome: "Bernardo",
    idade: 22
}];

try{
    // console.log(acessarPropriedade(objeto,"sobrenome"));
    console.log(acessarPropriedade(array,"nome"));
    console.log(acessarPropriedade(objeto,"idade"));
    console.log(typeof objeto);
}catch(e){
    console.log(e);
}