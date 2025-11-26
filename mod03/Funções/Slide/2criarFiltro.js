function criarFiltro(num){
    const dados = [ -10, -3, 0, 5, 12, 30, 60, 100, -85, 38 , 79, 102 ];
    return function(){
        const filtro = dados.filter(e=> e > num)
        console.log(filtro);
    }
}

let  filtro10 = criarFiltro(10)
let filtro50 = criarFiltro(50)
let filtroNegativo = criarFiltro(-5)

filtro10();
filtro50();
filtroNegativo();
