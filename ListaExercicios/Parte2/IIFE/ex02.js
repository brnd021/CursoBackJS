// Utilize uma IIFE para criar um módulo chamado Config que inicializa e expõe apenas duas
// propriedades públicas:
//  getAmbiente()
//  getVersao()
// Use variáveis internas privadas para guardar esses dados.

const config = (()=>{
    let ambiente = "pesquisa";
    let versao = "1.0";

    return {
        getAmbiente : () => ambiente,
        getVersao : () => versao,
    }
})();