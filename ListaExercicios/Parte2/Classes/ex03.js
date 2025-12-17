// Crie a classe Carro(marca, modelo):
//  atributo velocidade = 0
//  método acelerar(valor) → soma à velocidade
//  método frear(valor) → subtrai da velocidade
//  não permitir velocidade negativa (lançar erro)
//  método status() → retorna um texto com marca, modelo e velocidade atual

class Carro{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0
    }
    acelerar(valor){ this.velocidade += valor; }
    frear(valor){
        try{
            if(valor>this.velocidade) throw new Error ("Valor maior que velocidade atual");
            this.velocidade -= valor;
        }catch(e){ console.log(e) }
    }
    status(){ return "Marca: "+this.marca+" | Modelo: "+this.modelo+" | Velocidade: "+this.velocidade; }
}

const carro1 = new Carro("Honda","Civic");


console.log(carro1.status())