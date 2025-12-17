// Crie a função construtora Livro(titulo, autor, paginas). Em seguida, adicione no prototype os métodos:
//  resumo() →deve retornar uma string descrevendo o livro com título, autor e total de páginas.
//  aumentarPaginas(qtd) →deve adicionar a quantidade informada ao total de páginas.
// Crie duas instâncias e teste o funcionamento dos métodos, verificando que ambos pertencem ao
// Livro.prototype.

function Livro(titulo,autor,paginas){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
}

Livro.prototype.resumo = function(){
    return `Título: ${this.titulo} | Autor: ${this.autor} | Páginas: ${this.paginas}`;
}

Livro.prototype.aumentarPaginas = function(qtd){
    this.paginas += qtd;
}

const livro1 = new Livro("1984", "George Orwell", 328);
const livro2 = new Livro("O Hobbit", "J. R. R. Tolkien", 310);

console.log(livro1.resumo === livro2.resumo)