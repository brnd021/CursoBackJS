// Implemente a função criarLogger(prefixo) que retorne um objeto contendo:
//  info(msg)
//  warn(msg)
//  error(msg)
// Cada método deve imprimir a mensagem com o prefixo fornecido pela factory imediatamente no
// momento da criação.

function criarLogger(prefixo){
    return{
        info(msg){ console.info(prefixo + msg);},
        warn(msg){ console.warn(prefixo + msg);},
        error(msg){ console.error(prefixo + msg);}
    }
}
const log = criarLogger("[APP]");
log.info("Inicializado");
log.warn("Alerta");
log.error("ERRO");