// Implemente ehPalindromo(str) usando recursão. A função deve:
//  comparar o primeiro e o último caractere
//  remover esses caracteres e continuar a verificação
//  parar quando a string tiver tamanho 0 ou 1

function ehPalindromo(str) {
    const arr = [...str];
    if (arr.length <= 1) return "E palindromo";
    if (arr[0] !== arr[arr.length - 1]) {
        return "Nao e palindromo";
    }
    arr.shift();
    arr.pop();
    return ehPalindromo(arr.join(''));
}

console.log(ehPalindromo("abcddcba"))