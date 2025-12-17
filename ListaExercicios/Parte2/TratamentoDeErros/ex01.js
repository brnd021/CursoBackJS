// Implemente a função validarIdade(idade) que deve:
//  lançar um erro (throw new Error(...)) se a idade não for um número;
//  lançar um erro se a idade for negativa;
//  retornar a idade caso esteja válida.
// Crie um bloco try...catch que testa vários valores e imprime mensagens adequadas. Use finally para
// exibir "Processo finalizado".

function validarIdade(idade){
    if(typeof idade !== "number") throw new Error("Idade informada não é um número!");
    if(typeof idade <0) throw new Error("Idade informada menor que zero!");
    return idade;
}