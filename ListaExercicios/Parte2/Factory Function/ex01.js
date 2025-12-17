// Implemente uma factory function criarUsuario(nome, email) que retorne um objeto contendo:
//  nome, email
//  método validarEmail() que verifica se o padrão do e-mail corresponde a uma regex simples
//  método descricao() que retorna uma string com dados formatados

function criarUsuario(nome,email){
    return {
        nome,
        email,
        validarEmail(){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(emailRegex.test(email)) return "E-mail valido";
            return "E-mail invalido";
        },
        descricao(){
            return `Nome : ${nome} | E-mail: ${email}`;
        }
    }
}