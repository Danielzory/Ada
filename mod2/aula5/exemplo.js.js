const numeroAleatorio = Math.ceil(Math.random() * 100);
console.log(numeroAleatorio);
let tentativas = 0

while(true){
  let numeroDigitado = Number(prompt('Digite um número'))
  tentativas++
  
  if (numeroDigitado === numeroAleatorio) {
    alert(`Parabéns voce acertou o numero em ${tentativas} tentativas`)
    break;
  }else if (numeroDigitado > numeroAleatorio){
    alert(`O ${numeroDigitado} é Maior`)
  }else{
    lert(`O ${numeroDigitado} é Menor`)
  }
}  
