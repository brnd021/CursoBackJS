// Crie a classe Pessoa(nome, idade) contendo:
//  atributo nome
//  atributo idade
//  método apresentar() que retorna uma string com o nome e idade
// Se a idade for negativa, lance um erro no construtor.

class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        try {
            if(idade<0) throw new Error ("Idade negativa")
                this.idade = idade;
        }catch(e){
            console.log(e)
        }
    }
    apresentar(){
        return "Nome: "+this.nome+" | Idade: "+this.idade
    }
}

const pessoa1 = new Pessoa("Bernardo",22);
// const pessoa2 = new Pessoa("Bruno", -23);

console.log(pessoa1.apresentar())