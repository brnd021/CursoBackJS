//Count how many characters appear more than twice.”

function duplicateCount(text){
    const char = text.toLowerCase().split('');
    let contagem = []
    char.forEach((c) => {
        if (char.indexOf(c) !== char.lastIndexOf(c)){
            if(!contagem.includes(c) ){
                contagem.push(c)
            } 
        }
    });
    return contagem.length;
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
// Return the next square if sq is a perfect square, -1 otherwise

function findNextSquare(sq) {
    const square = Math.sqrt(sq)
    const squareChar = String(square).split('')
    let point = false
    squareChar.forEach(e=>{
        if(e === '.') point = true
    })
    if(point) return -1
    else return Math.pow((square+1),2)
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
//Take 2 strings s1 and s2 including only letters from a to z. 
//Return a new sorted string (alphabetical ascending), the longest possible, 
//containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1,s2){
    const array1 = [...s1].sort();
    const array2 = [...s2].sort();
    const newArray = [];
    for(const char of array1.concat(array2)){
        if(!newArray.includes(char)){
            newArray.push(char);
        }
    }

    return newArray.sort().join('')
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
//Square every digit of a number and concatenate them.

function squareDigits(num){
    const array = [...String(num)]
    for(let i = 0; i < array.length;i++){
        array[i] = Math.pow(array[i],2)
    }
    const number = array.join('')
    return Number(number)
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

function findOdd(a){
    let length = a.length
    let array = a.sort()
    let atual = array[0]-1
    for(let i = 0;i<length;i++){
        if(array[i] !== atual){
            atual = array[i]
            if((array.lastIndexOf(array[i])-i)%2 === 0) return atual
        }
    }
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
//Implement the function unique_in_order which takes as argument a sequence and 
//returns a list of items without any elements with the same value next to each 
//other and preserving the original order of elements.

function uniqueInOrder(a){
    let array = [...a]
    let newArray = []
    for(let i = 0; i<array.length;i++)
        if(array[i]!=array[i-1]) newArray.push(array[i])
    return newArray
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
//Implement a function that adds two numbers together and returns their sum in binary. 
//The conversion can be done before, or after the addition.
//The binary number returned should be a string.

function addBinary(a,b){
    let sum = a + b
    if(sum === 0 ) return 0
    let array = []
    while(sum > 0){
        array.push(sum % 2)
        sum = Math.floor(sum/2); 
    }
    return array.reverse().join('')
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
//Your function receives one side of the DNA (string, except for Haskell); 
//you need to return the other complementary side.
//DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    let arrayDna = [...dna]
    arrayDna.forEach((e,i)=>{
        if(e === "A") arrayDna[i] = "T"
            else if( e === "T") arrayDna[i] = "A"
                else if( e === "C") arrayDna[i] = "G"
                else arrayDna[i] = "C"
    })
    return arrayDna.join("")
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
//Write a function that accepts an array of 10 integers (between 0 and 9), 
//that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let phoneNumber = ["(",,,,")"," ",,,,"-",,,,]
    let pos = 0
    for(let i = 1; i < 14; i++){
        if(i != 4 && i != 5 && i != 9){
            phoneNumber[i]=numbers[pos];
            pos++
        }
    }
    return phoneNumber.join("")
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
//Write a function that takes an integer as input, and returns the number of bits that are equal to one
//in the binary representation of that number. You can guarantee that input is non-negative.

function countBits(n) {
    if( n < 0 ) return 0;
    let count = 0
     while (n > 0) {
        if (n % 2 === 1) count++;  
        n = Math.floor(n/2);                  
    }
    return count
}
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
//Write a function that takes a string of braces, and determines if the order of the braces is valid. 
//It should return true if the string is valid, and false if it's invalid.
//This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

function validBraces(braces){
    let array = [...braces]
    while(array.length>0){
        let indPar = array.indexOf(")");
        let indCol = array.indexOf("]");
        let indCha = array.indexOf("}");
        let indices = [indPar, indCol, indCha].filter(e => e !== -1);
        let menor = indices.length > 0 ? Math.min(...indices) : -1;
        if(menor <= 0 ) return false 
        if(array[menor] === ")" && array[menor-1] === "(") 
            array.splice(menor-1,2)  
        else if(array[menor] === "]" && array[menor-1] === "[")
            array.splice(menor-1,2)
        else if(array[menor] === "}" && array[menor-1] === "{")
            array.splice(menor-1,2)
        else return false
    }
    return true
}

console.log(validBraces("([)]"))

// tenho que achar um fechamento e verificar se a ultima abertura e compativel
// tem que achar o indice do primeiro fechamento 
/*------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------*/
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity 
// to go for a short walk.The city provides its citizens with a Walk Generating App on their 
// phones -- everytime you press the button it sends you an array of one-letter strings 
// representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single 
// block for each letter (direction) and you know it takes you one minute to traverse 
// one city block, so create a function that will return true if the walk the app gives 
// you will take you exactly ten minutes (you don't want to be early or late!) and will, 
// of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of 
// direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty 
// array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  if(walk.length !== 10) return false
  const array = [...walk]
  let contN = 0
  let contS = 0
  let contE = 0
  let contW = 0
  array.forEach(e =>{
    if(e=== "n") contN++
    else if(e=== "s") contS++
    else if(e=== "e") contE ++
    else contW ++
  })
  if((contN === contS) && (contE === contW)) return true
  else return false
}