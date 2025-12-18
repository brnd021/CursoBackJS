// Crie a classe base Funcionario, contendo as propriedades nome e salarioBase. Utilize
// Object.defineProperty para definir a propriedade cargo como somente leitura. A classe deve incluir
// ainda um método calcularSalario() com comportamento genérico e um método descricao() que retorne
// informações do funcionário. Em seguida, implemente as subclasses Gerente, Vendedor e Estagiario,
// todas herdando de Funcionario. Cada subclasse deve sobrescrever o método calcularSalario() conforme
// sua regra específica: o Gerente recebe salário base acrescido de 2000, o Vendedor recebe salário base
// somado à comissão informada no construtor e o Estagiário recebe 80% do salário base. Por fim, crie um
// array contendo funcionários de diferentes tipos e calcule o valor total da folha salarial utilizando
// polimorfismo ao chamar calcularSalario() para cada objeto.

class Funcionario{
    constructor(nome,salarioBase,cargo){
        this.nome = nome;
        this.salarioBase = salarioBase;
        Object.defineProperty(this,"cargo",{
            value:cargo,
            enumerable: true,
            writable: false,
            configurable: false
        })
    }
    calcularSalario(){
        return this.salarioBase
    }
    descricao(){
        return `Nome: ${this.nome} | Salario: R$${this.salarioBase} | Cargo: ${this.cargo}`
    }
}

class Gerente extends Funcionario{
    calcularSalario(){
        return super.calcularSalario() + 2000
    }
}

class Vendedor extends Funcionario{
    constructor(nome,salarioBase,cargo,comissao){
        super(nome,salarioBase,cargo);
        this.comissao = comissao;
    }
    calcularSalario(){
        return super.calcularSalario() + this.comissao;
    }
    descricao(){
        return super.descricao() + ` | Comissao: R$${this.comissao}`
    }
}

class Estagiario extends Funcionario{
    calcularSalario(){
        return super.calcularSalario() * 0.8
    }
}

function totalSalario(lista){
    let total = 0
    lista.forEach(e=>{total+=e.calcularSalario()})
    return total
}

const salarioBase = 1800
const gerente = new Gerente("Lucas",salarioBase,"Gerente");
const vendedor = new Vendedor("Bruna",salarioBase,"Vendedor",1000);
const estagiario = new Estagiario("Camila",salarioBase,"Estagiario");

console.log(gerente.descricao());
console.log(vendedor.descricao());
console.log(estagiario.descricao());

console.log("Total da folha: R$"+totalSalario([gerente,vendedor,estagiario]));