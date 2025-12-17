// Implemente a função carregarDados(callbackSucesso, callbackErro) que simula uma chamada
// assíncrona usando setTimeout.
// A função deve:
//  retornar um objeto com dados simulados após 1 segundo, chamando callbackSucesso;
//  ou gerar um erro aleatório (por exemplo 30% de chance) chamando callbackErro.

function carregarDados(callbackSucesso,callbackErro){
    const n = Math.floor(Math.random() * 10) + 1;
    setTimeout(()=>{
        if(n<=3)console.log(callbackErro())
        console.log(callbackSucesso())
    },1000)
}

function gerarDados(){
    return{
        nome: "Bernardo",
        idade: 22,
        cidade: "Ouro Preto"
    }
}

function gerarErro(){
    throw new Error("Erro gerado")
}

carregarDados(gerarDados,gerarErro)