console.log('====IMC====');

function imcCalc() {

    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('res');
    let msg = null;

    const imc = peso / (altura * altura);

    if(imc > 25){
       msg = 'Acima do peso';
    }
    else if (imc < 18.49){
        msg = 'Abaixo do Peso'
    }
    else{
        msg = 'no Peso normal';
    }

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} e você esta ${msg}!`;
    resultado.innerHTML += '<hr>';
    
}
