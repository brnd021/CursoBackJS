// Crie a classe Notificacao contendo as propriedades nome, enderecoEmail e mensagem, além do
// método enviar(), que deverá apresentar um comportamento genérico. Em seguida, implemente as classes
// Email, SMS e Whatsapp, todas herdando de Notificacao. Cada subclasse deve sobrescrever o método
// enviar(), definindo sua própria forma de envio. Por fim, implemente a função
// processarNotificacoes(lista), que deve receber um conjunto de objetos de diferentes tipos de
// notificações e, para cada item, chamar o método enviar() de maneira polimórfica, respeitando o
// comportamento específico de cada classe.

class Notificacao{
    constructor(nome,enderecoEmail,mensagem){
        this.nome = nome;
        this.enderecoEmail = enderecoEmail;
        this.mensagem = mensagem;
    }
    enviar(){
        console.log(this.mensagem);
    }
}

class Email extends Notificacao{
    enviar(){
        super.enviar();
        console.log("Mensagem enviada via E-mail.");
    }
}

class SMS extends Notificacao{
    enviar(){
        super.enviar();
        console.log("Mensagem enviada via SMS.");
    }
}

class Whatsapp extends Notificacao{
    enviar(){
        super.enviar();
        console.log("Mensagem enviada via Whatsapp.");
    }
}

function processarLista(lista){
    lista.forEach(e=>{e.enviar();})
}

const msgSMS = new SMS("Bernardo","bernardo@email.com","Bom dia");
const msgEMAIL = new Email("Pedro","pedro@email.com","Boa tarde");
const msgWHATS = new Whatsapp("Livia","livia@email.com","Bom noite");

processarLista([msgSMS,msgEMAIL,msgWHATS]);