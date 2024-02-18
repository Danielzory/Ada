//Resposta questão 1
console.log('------Questão 1------');
let hora = '6';
let minuto = '15' ;
let segundo = '25' ;
let periodo = 'PM' ; 
function converteHora (hora, minuto, segundo, peiodo){
    if (periodo === 'PM'){
        let newHora = parseInt(hora) + 12;
        
        console.log(`${newHora}:${minuto}:${segundo}`) 
    }
      
}
converteHora(hora, minuto, segundo, periodo);


//Resposta questão 2
console.log('------Questão 2------');

const frases = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";

function contafrases (frases) {
    let qnt = 1;
    for (let i = 0; i < frases.length; i++){
        if (frases[i].charAt(0).charCodeAt(0) < 91 && frases[i].charAt(0).charCodeAt(0) > 64){
            qnt++
        }
    }
   console.log(qnt);
}
contafrases(frases);


//Resposta questão 3
console.log('------Questão 3------');
const numbers = [12, 17, 15, 19, 22, 17, 19, 12];

function numeroSolitario (numbers) {

    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] != 12 && numbers[i] != 17 && numbers[i] != 19) {
           console.log (numbers[i]);
        }
    }
}
numeroSolitario(numbers);

// Resposta questão 4
// e. 1 1 2 1 2 3 1 2 3 4

//Resposta questão 5
// a. true

//Resposta questão 6
//b) 2


