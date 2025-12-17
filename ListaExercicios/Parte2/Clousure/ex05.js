// Implemente a função criarCarrinho() que usa closure para simular um carrinho com:
//  adicionar(produto, preco)
//  remover(produto)
//  listar()
//  total()
// Os itens devem permanecer em uma lista privada, acessível apenas pelos métodos expostos.

function criarCarrinho(){
    const lista = new Map();
    return {
        adicionar : function(produto,preco){
            lista.set(produto,preco);
        },
        remover : function(produto){
            lista.delete(produto);
        },
        listar : function (){
            return lista;
        },
        total : function (){
            let total = 0;
            lista.forEach(value=>{
                total += value
            })
            return total;
        }
    }
}

const listaDeCompras = criarCarrinho();

listaDeCompras.adicionar("Mesa",900);
listaDeCompras.adicionar("TV",5000);
listaDeCompras.adicionar("Sofa",1950);
console.log(listaDeCompras.listar());
console.log(listaDeCompras.total());
listaDeCompras.remover("Sofa");
console.log(listaDeCompras.listar());
console.log(listaDeCompras.total());
