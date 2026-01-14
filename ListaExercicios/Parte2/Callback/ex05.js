// Implemente a função executarSequencia(tarefas, fim) onde:
//  tarefas é um array de funções que recebem um callback next para prosseguir;
//  cada tarefa só executa a seguinte quando chamar next();
//  ao terminar todas as tarefas, a função fim() é chamada.
// Simule tarefas com setTimeout para reforçar o fluxo assíncrono controlado por callbacks.

function executarSequencia(tarefas,fim){
    let i = 0;
    function next(){
        if(i < tarefas.length){
            const tarefa = tarefas[i];
            i++;
            tarefa(next);
        }
        else {
            fim();
        }
    }

    next();
}


function tarefa1(next){
    console.log("Tarefa 1 inicio");
    setTimeout(()=>{
        console.log("Tarefa 1 fim");
        next();
    },2000);
}

function tarefa2(next){
    console.log("Tarefa 2 inicio");
    setTimeout(()=>{
        console.log("Tarefa 2 fim");
        next();
    },3500);
}

function finish(){
    console.log("Tarefas concluidas");
}


executarSequencia([tarefa1,tarefa2],finish);