class Produto{
    #nome;
    #preco;
    constructor(nome,preco,categoria,estoque){
        this.#nome = nome;
        this.#preco = preco;
        Object.defineProperty(this,"id",{
            value : Math.floor(Math.random()*(9999-1 + 1)),
            writable : false,
            enumerable : true,
            configurable : false
        });
        Object.defineProperties(this,{
            categoria : {
                get : function (){ return categoria},
                set : function (novaCategoria){
                    if(typeof novaCategoria !== "string" || novaCategoria.length === 0) throw new TypeError ("Não e uma string")
                    categoria = novaCategoria
                },
                enumerable : true,
                configurable : false
                
            },
            estoque : {
                get : function (){ return estoque},
                set : function (valorEstoque){
                    if(typeof valorEstoque !== "number" || valorEstoque<0) throw new TypeError("Proibido a inserção de valores negativos")
                    estoque = valorEstoque
                },
                enumerable : true,
                configurable : false
            }
        });
    }
    get nome() { return this.#nome }
    set nome(nome){
        if(nome.length===0 || typeof nome !== "string")throw new TypeError("Nome inválido")
        this.#nome = nome
    }
    get preco(){ return  this.#preco }
    set preco(valor){
        if(valor<=0 || typeof valor !== "number")throw new TypeError("Proibido a inserção de valores negativos")
        this.#preco = valor
    }
    descricao(){
        return `Produto: ${this.#nome} | Preço: ${this.#preco} | Categoria: ${this.categoria} | Estoque: ${this.estoque}`
    }
}

const mouse = new Produto("Mouse",100,"Periférico",50)
const teclado = new Produto("Teclado",180,"Periférico",40)
const placaMae = new Produto("Placa-mãe",700,"Hardware",25)

mouse.preco = 150;
mouse.id = 688;
mouse.categoria = 131

console.log(mouse.descricao())
console.log(placaMae.descricao())
console.log(teclado.descricao())
console.log(mouse.id)
console.log(mouse.preco)
