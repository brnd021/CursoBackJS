// Crie a função construtora Temperatura(valorInicial) que armazena uma temperatura em graus
// Celsius. Adicione no prototype os métodos:
//  paraFahrenheit() →deve retornar o valor convertido para Fahrenheit.
//  paraKelvin() →deve retornar o valor convertido para Kelvin.
//  atualizar(v) →deve substituir o valor interno pela nova temperatura informada.
// Crie pelo menos três instâncias e teste todas as conversões. Verifique também se todos os métodos
// estão realmente no prototype ao invés de dentro da instância.

function Temperatura(valorInicial){
    this.temperatura = valorInicial
}

Temperatura.prototype.paraFahrenheit = function(){
    return this.temperatura* 1.8 + 32
}
Temperatura.prototype.paraKelvin = function(){
    return this.temperatura + 273.15
}
Temperatura.prototype.atualizar = function(temp){
    this.temperatura = temp
}

const temperatura1 = new Temperatura(30)
const temperatura2 = new Temperatura(24)


console.log(temperatura1.paraFahrenheit())
console.log(temperatura2.paraKelvin())
temperatura2.atualizar(32)
console.log(temperatura2.temperatura)
