// Crie uma função login(maxTentativas) que retorne uma função interna responsável por validar uma
// senha fixa (por exemplo "abc123"). Use closure para:
//  controlar o número de tentativas restantes;
//  bloquear acesso após exceder o limite;
//  impedir acesso ao contador de tentativas externamente.

function login(maxTentativas){
    let attempts = maxTentativas;
    return function(senha){
        if(attempts <1) return "Numero maximo de tentativas atingido";
        if(senha!== "abc123"){
            attempts--;
            return( `Senha incorreta. Restam ${attempts+1} tentativas.`);
        }
        return "Senha correta. Bem - vindo";
    }
}

const senha = login(3);

// console.log(senha(3));
// console.log(senha(2));
// console.log(senha(1));
// console.log(senha(0));
console.log(senha("abc123"));