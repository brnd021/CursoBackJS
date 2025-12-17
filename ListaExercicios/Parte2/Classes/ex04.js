// Implemente a classe Triangulo(base, altura):
//  validar no construtor se os valores são positivos (erro caso contrário)
//  método area() que retorna:
//  base * altura / 2
//  método descricao() explicando o formato "Triângulo com base X e altura Y".

class Triangulo{
    constructor(base,altura){
        try{
            if(base<=0 || altura <=0) throw new Error ("Proibido valores menores ou iguais a 0.")
        }catch(e){ console.log(e); }
        this.base = base;
        this.altura = altura;
    }
    area(){ return this.base * this.altura / 2 ;}
    descricao(){ return "Triângulo com base: "+this.base+ " e altura: "+this.altura; }
}

const triangulo = new Triangulo(5,6);
// const triangulo2 = new Triangulo(2,0);

console.log(triangulo.area());
console.log(triangulo.descricao());