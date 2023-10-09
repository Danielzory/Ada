const imobiliarias = ["Arantes", "Terra Nova", "Ivan", "Seratto", "Azaleia"];
function retornarPrimeiraImobiliaria(imobiliarias) {
    const primeira = imobiliarias.shift();
    console.log(primeira)
}

retornarPrimeiraImobiliaria(imobiliarias);

document.write('<hr>')


let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];
const nomesAtualizados = nomes.map( nome => nome.charAt(0).toUpperCase() + nome.slice(1));
console.log(nomesAtualizados);





const alunos = [
    { nome: "Filipe Diogo", nota: "80" },
    { nome: "Enzo Miguel", nota: "77" },
    { nome: "Mateus Danilo", nota: "88" },
    { nome: "Olivia Stella", nota: "95" },
    { nome: "César Paulo", nota: "68" },
  ];

function quantidadeAprovados(alunos) {
    const limite = alunos.length;
    let qnt = 0;
    for (let i = 0; i < limite; i++){
        let nota = parseInt(alunos[i].nota)
        if (nota >= 70){
            qnt++
        } 
    }
    console.log(qnt);  
  }

  


  const feedbacks = [
    "Melhorar responsividade do site",
    "Erros confusos",
    "Os botões são intuitivos",
    "Erros confusos",
  ];
  
  function removerFeedbacksDuplicados(feedbacks) {
      const feedbacksSemRepeticao = new Set(feedbacks);
      const print = [...feedbacksSemRepeticao.values()];
      console.log(print)
  }

  removerFeedbacksDuplicados(feedbacks);
  



  