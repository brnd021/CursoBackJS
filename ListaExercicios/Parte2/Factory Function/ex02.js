// Crie a função criarProduto(nome, preco) que devolve um objeto com:
//  propriedade pública nome
//  método público getPreco()
//  método público setPreco(novoPreco) que só permite preços positivos
//  variável interna privada preco (fechada via closure)

function criarProduto(nome,preco){
    let precoPriv = preco;
    return {
        nome,
        getPreco(){ return precoPriv; },
        setPreco(novoPreco){
            try{
                if(preco <= 0) throw new Error("Valor menor que 0");
                precoPriv = novoPreco; 
            }
            catch(e){
                console.log(e)
            }
        }    
    }
}