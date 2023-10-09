console.log('==Estou Vinculado==');

// Entrada dos dados (inputt)
let nome = prompt('Digite seu nome: ');

// Processamento
nome = (`Seu nome é: ${nome.repeat(3)}`);
console.log(`Seu nome é: ${nome.toLocaleUpperCase()}`);
nome = (`Seu nome é: ${nome.toLocaleUpperCase()}`);
nome = (`Seu nome é: ${nome.toLocaleUpperCase().replace(/D/g,'L')}`); // é possível chamar de forma encadeada

// Saida de dados (output)
document.write(`Boa noite, ${nome}.`);
