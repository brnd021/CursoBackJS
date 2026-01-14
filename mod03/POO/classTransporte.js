class Transporte{
    constructor(nome,velocidade){
        this.nome = nome;
        this.velocidade = velocidade;
    }
    calcularTempo(distancia){
        const tempoEmHoras = distancia / this.velocidade;
        const horas = Math.floor(tempoEmHoras);
        const minutos = Math.round((tempoEmHoras - horas) * 60);
        return `${horas}h ${minutos}min`;
    }

    descricao(){
        return "Transporte genérico se deslocando..."
    }
}

class Onibus extends Transporte{
    descricao(){
        return  "Ônibus circulando pelas vias urbanas..."
    }
}

class Metro extends Transporte{
    descricao(){
        return "Metrô se deslocando pelos trilhos subterrâneos..."
    }
}

class Bicicleta extends Transporte{
    descricao(){
        return  "Bicicleta pedalando pela ciclovia..."
    }
}

function executar(arr,distancia){
    arr.forEach(e=>{
        console.log(e.calcularTempo(distancia));
        console.log(e.descricao());
        console.log("-----------------------------------------");
    })
}

const onibus = new Onibus("898",55);
const metro = new Metro("Linha 7", 80);
const bicicleta = new Bicicleta("Caloi",35);

executar([onibus,metro,bicicleta],40);