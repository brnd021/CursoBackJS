// Implemente uma IIFE que:
// Crie duas variáveis internas:
// lista → um array vazio
// limite → um número inteiro fornecido como parâmetro da IIFE
// Dentro da IIFE, crie três funções internas (não disponíveis globalmente):
// adicionar(item) → adiciona um item à lista apenas se o tamanho atual for menor que limite
// remover() → remove o último item da lista
// mostrar() → imprime no console o conteúdo atual da lista
// Ao final da IIFE, execute automaticamente:
// Pelo menos duas inserções
// Uma remoção
// Uma exibição final do estado da lista
// O código não deve expor nenhuma das funções ou variáveis para o escopo global.

(function(limite){
    const lista = [];
    function adicionar(item){
        if(lista.length<limite)return lista.push(item);
        else return lista;
    }
    function remover() {    return lista.pop();}
    function mostrar() {    console.log(lista);}
    adicionar(64);
    mostrar();
    adicionar(50);
    mostrar();
    adicionar(99);//lista.length = limite, nao add 99
    mostrar();
    remover();//remove 50
    mostrar();
    adicionar(15);
    mostrar();
})(2);