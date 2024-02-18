console.log('===Repetição===');

document.write('<hr>');
document.write('<h2> Números de 1 à 10 <h2>');


// usado quando sabemos o início e o fim
let i = 1;

while (i <= 10) {
    document.write(i); 
    i++
}

document.write('<hr>');
document.write('<h2> Números de 50 à 1 <h2>');

let j = 50;
while (j >= 1) {
    document.write(j, '<br>'); 
    j--
}

//desafio 1
document.write('<hr>');
document.write('<h2> Desafio! (a-z) <h2>');

const escola = 'Ada';
console.log(escola, typeof escola);
console.log(escola.charAt(0)); // letra
console.log(escola.charCodeAt(0)); // código ascii
console.log(String.fromCharCode(65)); // A

let k = 97
    while (k <= 122){
        document.write(String.fromCharCode(k), '-'); 
        k++;
    }

document.write('<hr>');
//desafio 2
document.write('<hr>');
document.write('<h2> Desafio! descobrir códigos decimais para cada letra da frase(a-z) <h2>');

const frase = 'Coding Tank Ifood';
let n = 0;
while(n < frase.length) {
    document.write(frase.charCodeAt(n), ' ' );
    n ++;
}
document.write('<hr>');
// for
for (let i = 1; i < 15; i++){
    document.write(i, ' ');
}
//desafio 3
document.write('<hr>');
document.write('<h2> Desafio! numeros pares do 100 ate o 2 <h2>');

for (let f = 100; f >= 2; f = f-2){
  
    if (f > 2 ) {
        document.write(f, ' - ');
    }
    else{
        document.write(f, ' '); 
    }
   
}
//desafio4
document.write('<hr>');
document.write('<h2> Desafio! Asteristicos <h2>');
//******
//******
//******
//******
//******

for (let x = 1; x <= 5; x++ ){ 
    for(let y=1; y<= 10; y++) {
        document.write('*');
    }
    document.write('<br>')
   
}
document.write('<hr>');

//Array
// exemplo (Boa lógica)

const carros = [];
let controle = true;

while (controle) {
    carros[carros.length] = prompt(`Digite o nome do veículo ${carros.length}:`)

    if(carros.length == 5){
        controle = false;
    }
}

document.write(carros);





