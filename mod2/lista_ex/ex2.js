const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
  ]
  


function ehMaiorQue1500 (empregados){
    return empregados.salario >= 1500;
}
function ehMenorQue1000 (empregados){
    return empregados.salario <= 1000;
}


console.log(empregados.some(ehMaiorQue1500));
console.log(empregados.some(ehMenorQue1000));
