// Crie uma IIFE que registre um event listener para click. Dentro dela, mantenha um contador privado
// de cliques e, a cada clique, exiba no console quantas vezes o evento ocorreu. O contador não pode ser
// acessado externamente.

(() => {
  let contador = 0;

  document.addEventListener("click", () => {
    contador++;
    console.log(`Cliques: ${contador}`);
  });
})();
