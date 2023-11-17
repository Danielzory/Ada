const pessoas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
  ]

function imc (pessoas) {
    for (let i = 0; i < pessoas.length; i++){
        let resultadoImc = pessoas[i].peso / pessoas[i].altura ** 2;
        console.log(`O IMC de ${pessoas[i].nome} é de aproximadamente: ${resultadoImc.toFixed(2)}`);
    }
}

imc(pessoas);