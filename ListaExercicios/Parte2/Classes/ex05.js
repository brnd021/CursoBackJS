// Crie a classe Agenda:
//  use um array interno contatos
//  método adicionar(nome, telefone)
//  método remover(nome)
//  lançar erro se o nome não existir na lista
//  método listar() que mostra todos os contatos
//  método buscar(nome) que retorna o contato correspondente

class Agenda{
    constructor(){
        this.contatos = [];
    }
    adicionar(nome,telefone){
        this.contatos.push({name:nome,tel:telefone})
    }
    remover(nome){
        const index = this.contatos.findIndex(
            c => c.name === nome);
        if (index === -1) {
            throw new Error("Nome não existe na lista");
        }
        this.contatos.splice(index, 1);
    }
    listar(){
        console.table(this.contatos)
    }
    buscar(nome){
        const contato = this.contatos.find(
        c => c.name === nome);

        if (!contato) {
        throw new Error("Contato não encontrado");
        }
        return console.log(contato);
    }
}

const contatos = new Agenda()

contatos.adicionar("Bernardo",98931290)
contatos.adicionar("Bianca",99323999)
contatos.adicionar("Fernando",993129054)
contatos.adicionar("Leonardo",987390123)
contatos.adicionar("Maria",995874632)
// contatos.buscar("Bernardo")
contatos.listar()