class Produto{
    constructor(nome,quantidade){
        this.nome = nome
        this.qtd = quantidade
    }
    adicionar(qtd){ this.qtd += qtd}
    remover(qtd){
        if(qtd<=this.qtd)this.qtd -= qtd
        else console.log("Estoque insuficiente")
    }
    get verEstoque(){ console.log( `Produto: ${this.nome} | Estoque ${this.qtd}`)}
}

const teclado = new Produto("Multilaser",5)

console.log(teclado.qtd)
teclado.adicionar(6)
console.log(teclado.qtd)
teclado.remover(10)
console.log(teclado.qtd)
teclado.remover(2)
teclado.verEstoque