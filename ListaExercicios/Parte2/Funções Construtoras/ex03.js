// Crie a função construtora Produto(nome, preco). Valide para aceitar apenas preços positivos.
// Implemente alteraPreco(n) com a mesma regra de validação. Crie o método descricao() para mostrar
// informações formatadas. Teste com valores válidos e inválidos.

function Produto(nome,preco){
    this.nome = nome;
    this.preco;
    try{
        if(preco <= 0)throw new Error("Preco menor ou igual 0");
        this.preco = preco;   
    }catch(e){
        console.log(e);
    }
}

Produto.prototype.alteraPreco = function(n){
    try{
        if(this.preco <= 0)throw new Error("Preco menor ou igual 0");
        this.preco = n;
    }catch(e){
        console.log(e);
    }
}

Produto.prototype.descricao = function(){
    console.log(`Nome: ${this.nome} | Preco: ${this.preco}`);
}

const produto1 = new Produto("Computador",7000);
const produto2 = new Produto("Teclado", 200);

produto1.descricao()
produto1.alteraPreco(5000)
produto1.descricao()
