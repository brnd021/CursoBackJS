// Crie a função autenticar(usuario, senha) que:
//  lança um erro se qualquer parâmetro estiver vazio;
//  lança um erro se o usuário não for "admin" ou a senha não for "1234";
//  retorna "Acesso concedido" caso tudo esteja correto.
// Crie um bloco try...catch avaliando vários cenários de falha e sucesso.

function autenticar(usuario,senha){
    if(usuario === "" || senha === undefined)
        throw new Error("Usuário ou senha vazios");
    if(usuario !== "admin" || senha !== 1234)
        throw new Error("Usuário ou senha incorretos");
    return "Acesso concedido";
}
try{
    // console.log(autenticar("admin",));//Senha vazia
    // console.log(autenticar("",1234));//Usuário vazio
    // console.log(autenticar("User",1234));//Usuário incorreto
    // console.log(autenticar("admin",1134));//Senha incorreta
    console.log(autenticar("admin",1234));//Acesso concedido
}catch(e){
    console.log(e);
}