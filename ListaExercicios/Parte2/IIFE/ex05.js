// Crie uma IIFE que simule o pré-carregamento de dados (como configuração ou preferências). Ela deve
// retornar uma função obter(chave) que busca valores em um objeto privado. Teste com pelo menos três
// chaves.
const config = (() => {
  const dados = {
    nome: "Bernardo",
    idioma: "pt-BR",
    modo : "dark"
  };
  return function obter(chave) {
    return dados[chave];
  };
})();

console.log(config("nome"))
console.log(config("idioma"))
console.log(config("modo"))