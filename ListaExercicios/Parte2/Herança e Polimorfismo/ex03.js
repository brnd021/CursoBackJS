// Crie a classe base Forma definindo, por meio de Object.defineProperty, a propriedade tipo como
// somente leitura. A classe deve possuir o método area(), que deve lançar um erro para simular um método
// abstrato, e o método info(), responsável por retornar o tipo da forma e o valor de sua área. Em seguida,
// implemente as subclasses Quadrado, Retangulo e Circulo, cada uma sobrescrevendo o método area() de
// acordo com sua fórmula geométrica específica. Por fim, crie um array contendo objetos das diferentes
// formas e utilize polimorfismo para exibir as áreas chamando o método info() para cada elemento.

class Forma{
    constructor(tipo){
        Object.defineProperty(this,"tipo",{
            value : tipo,
            writable : false,
            enumerable : true,
            configurable : false
        })
    }
    area(){
        throw new Error("Metodo area() deve ser sobescrito");
    }
    info(){
        return `Tipo : ${this.tipo} | Area : ${this.area()}`;
    }
}

class Quadrado extends Forma{
    constructor(tipo,lado){
        super(tipo);
        this.lado = lado
    }
    area(){
        return this.lado ** 2;
    }
}

class Retangulo extends Forma{
    constructor(tipo, largura, comprimento){
        super(tipo);
        this.largura = largura;
        this.comprimento = comprimento;
    }
    area(){
        return this.largura * this.comprimento;
    }
}

class Triangulo extends Forma{
    constructor(tipo,base,altura){
        super(tipo);
        this.base = base;
        this.altura = altura;
    }
    area(){
        return this.base * this.altura / 2;
    }
}

function imprimeInfo(lista){
    lista.forEach(e=>{console.log(e.info())})
}

const quadrado = new Quadrado("Quadrado",5);
const retangulo = new Retangulo("Retangulo",20,4);
const triangulo = new Triangulo("Triangulo",10,6);

imprimeInfo([quadrado,retangulo,triangulo]);