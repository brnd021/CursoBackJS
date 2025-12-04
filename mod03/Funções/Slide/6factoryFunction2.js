/* 
Crie um pequeno sistema para gerenciar tarefas utilizando função construtora. Cada tarefa
deve ter:
título
descrição
status (inicialmente "pendente")

Parte 1 – Criar a Função Construtora
Desenvolva uma função construtora chamada Tarefa que receba titulo e descricao como
parâmetros.
Dentro da função, defina o atributo status com valor padrão "pendente".
Exemplo de uso esperado:

Parte 2 – Adicionar Métodos ao Prototype

Implemente três métodos no Tarefa.prototype:
concluir()
Altera o status para "concluída".

resumir()
Retorna uma string no formato:
"Título: <titulo> | Status: <status>"

alterarDescricao(novaDescricao)
Atualiza o campo descricao.

Crie três instâncias de Tarefa e:
Altere a descrição de uma delas.
Conclua outra.
Exiba o resumo de todas as tarefas utilizando o método resumir().

*/

function Tarefa(titulo,descricao){
    let status = "pendente"
    this.titulo = titulo;
    this.descricao = descricao;
}

Tarefa.prototype.concluir = function(){this.status="concluída"}
Tarefa.prototype.resumir = function(){return `Título: ${this.titulo} | Descrição: ${this.descricao} | Status: ${this.status}`}
Tarefa.prototype.alterarDescricao = function(novaDescricao){this.descricao = novaDescricao}


const t1 = new Tarefa("Ler artigo", "Ler o artigo sobre otimização em IA");
const t2 = new Tarefa("Limpar a casa","Varrer o quarto e limpar janelas");
const t3 = new Tarefa("Ir pra academia", "Treino de peito e triceps");

t2.alterarDescricao("Varrer o quarto, limpar janelas e lavar o quintal");
t3.concluir();
console.log(t1.status)
console.log(t1.resumir());
console.log(t2.resumir());
console.log(t3.resumir());