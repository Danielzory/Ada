//ex 01
let numero = 5

if (numero > 0){
    console.log('Positivo')
}else if (numero < 0){
    console.log('Negativo')
}else {
    console.log('Zero')
}
console.log('-----------------------------')
//ex 02
let numero1 = 3

if (numero % 2 === 0){
    console.log('Par');
}else {
    console.log('Impar')
}


// usando ternário

const ehPar = numero % 2 === 0 ? 'sim' : 'não';
console.log(ehPar);

console.log('-------------------------------------')

//ex 03

let numero3 = 16;

if(numero3 % 3 === 0 && numero3 % 5 === 0){
    console.log('Divisível por 3 e 5')
}else{
    console.log('Não divível')
}

console.log('-----------------------------')

//ex 04

const ano = 2004;

if (ano % 400 === 0 || (ano % 100 != 0 && ano % 4 ===0)){
    console.log('O ano é bissexto!')
}else {
    console.log('Não bissesxto')
}

console.log('--------------------------------------')

//ex 05

const numero5 = 424;

const numeroInvertido = parseInt(numero5.toString().split('').reverse().join(''))

const ehPalidromo = numero5 === numeroInvertido ? 'é Palídromo' : 'Não é Palídromo';


console.log(ehPalidromo);