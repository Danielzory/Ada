//desafio 2

function  aprovarEmprestimo(salario, scoreDeCredito,  idade ){
    if(salario >= 5000 && scoreDeCredito >= 700 && idade >= 18){
      console.log('Aprovado para  Empréstimo')
    }  else{
      console.log('Reprovado na análise')
    }
}

aprovarEmprestimo(5009,600,18);

console.log('------------desafio  3-----------')

function verificarCompatibilidade (navegador, sisOp) {
   if ((navegador == 'chrome'  ||  navegador == 'firefox') && (sisOp == 'windows' || sisOp == 'mec')) {
    console.log('Compatível') 
   } else {
    console.log('Não Compatível')
   } 
}

verificarCompatibilidade('safari', 'mec');

console.log('------------desafio  4-----------')

function elegivelParaDesconto (idade, compraMinima, isNewClient){
    if(idade >= 60 && compraMinima >= 100 && isNewClient == false){
        console.log('Desconto disponível')  
    }else {
        console.log('Cliente não elegível')
    }
}

elegivelParaDesconto(60,190,false);