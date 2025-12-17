// Implemente a função construtora Veiculo(nome, marca). Adicione no prototype os métodos:
//  info(): retorna nome e marca
//  renomear(novoNome): altera o nome
// Crie três instâncias e verifique se os métodos do prototype são compartilhados entre elas.

function Veiculo(nome,marca){
    this.nome = nome;
    this.marca = marca;
    this.info = function(){
        console.log(`Nome: ${this.nome} | Marca: ${this.marca}`)
    }
}

Veiculo.prototype.info = function(){
    console.log(`Nome: ${this.nome} | Marca: ${this.marca}`)
}

Veiculo.prototype.renomear = function (novoNome){
    this.nome = novoNome
}

const carro1 = new Veiculo("Vectra","Chevrolet");
const carro2 = new Veiculo("RX-7","Mazda");
const carro3 = new Veiculo("Arteon","Volkswagen");

carro1.renomear("Corvette")
carro1.info();
carro2.renomear("RX-8");
carro2.info();
carro3.renomear("Golf");
carro3.info();