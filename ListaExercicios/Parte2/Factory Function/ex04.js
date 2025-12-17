// Desenvolva a factory criarPersonagem(nome) que:
//  possui atributos como nome, pontosVida = 100
//  possui métodos: levarDano(x), curar(x), status()
//  utilize composição via outras factories, por exemplo: criarHabilidades() →retorna métodos como
// atacar(), defender(), etc.
// Combine o objeto final a partir de funções menores.

function criarPersonagem(nome){
    return{
        nome,
        pontosVida : 100,
        levarDano(x){
            this.pontosVida -= x;
            if (this.pontosVida < 0) this.pontosVida = 0;
        },
        curar(x){
            this.pontosVida += x
            if(this.pontosVida > 100 ) this.pontosVida = 100;
        },
        status(){
            return `Nome: ${nome} | Vida: ${this.pontosVida}`;
        },
        actions : criarHabilidades(),
        cash : criarCarteira()
    }
}

function criarHabilidades(){
    return {
        atacar(){
            return console.log("Personagem atacando.");
        },
        correr(){
            return console.log("Personagem correndo.");
        },
        agachar(){
            return console.log("Personagem agachado.");
        }
    }
}

function criarCarteira(){
    let cash = 0;
    return{
        getCash(){ return cash ;},
        setCash(x){ cash+=x ;}
    }
}

const p1 = criarPersonagem("Bernardo");

p1.actions.atacar();
p1.levarDano(30);
console.log(p1.status()); 

p1.curar(50);
console.log(p1.status()); 

p1.cash.setCash(200);
console.log(p1.cash.getCash()); 