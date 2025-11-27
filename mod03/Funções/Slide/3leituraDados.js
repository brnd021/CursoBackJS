// Considere que você está desenvolvendo um módulo simples para simular operações
// de leitura de dados em um sistema. Sua tarefa é implementar uma função que receba:
//   Um array de números;
//   Uma função de processamento (callback) que será aplicada individualmente 
//   a cada elemento;
//   Uma função final (callback) que será executada ao final do processamento, 
//   recebendo o resultado agregado.
// Tarefa
// Implemente a função processarDados com o seguinte comportamento:
// A função deve receber três argumentos:
// processarDados(lista, callbackProcessamento, callbackFinal)
// O processamento de cada item deve ocorrer de forma assíncrona, usando setTimeout com um atraso aleatório entre 100 e
// 500 ms para simular uma operação de I/O.
// O callbackProcessamento deve transformar cada valor da lista e retornar o valor processado.
// Após todos os itens terem sido processados, a função deve chamar callbackFinal, passando um objeto com:
//  {
//  quantidade: <total de itens>,
//  resultados: <array com os resultados processados>
//  }
//  Crie um exemplo de uso que:
//  Multiplique cada número por 2 durante o processamento.
//  Exiba ao final um resumo no console
 
const numeros = [5,46,12,-23,0,-2,5];

function multiplica(num){
    return num * 2;
}
function criaObjeto(array){
    return {
        quantidade : array.length,
        resultado : array
    };
}

function processarDados(array,callbackProcessamento,callbackFinal){
    let newArray = [];
    let proc = 0;
    array.forEach((e,i) =>{
        setTimeout(() => {
            let processado = callbackProcessamento(e)
            newArray[i] = processado;
            console.log(newArray);
            proc++;
            if(proc === array.length)console.log(callbackFinal(newArray));
        },Math.random()*(500-100)+100)
    });    
};
processarDados(numeros,multiplica,criaObjeto);