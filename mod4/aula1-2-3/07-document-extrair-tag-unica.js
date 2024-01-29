let result;

result = document.getElementById("tabela1");
result = document.querySelector("#tabela1");
result = document.querySelector(".borda"); //retorna só o primeiro
result = document.querySelector("[target='_blank']");

result= document.querySelector('h1').textContent;
result= document.querySelector('h1').innerText = 'Titulo Alterado pelo ANONIMUS';

let nome = "Daniel"
let idade = 25
result = document.querySelector('#tabela1').innerHTML += `
<tr>
   <th>Nome</th>
   <th>Idade</th>
</tr>
<tr>
    <td>${nome}</td>
    <td>${idade}</td>
</tr>
<tr>
   <td data-id="2" >Maria</td>
    <td data-id="1" >30</td>
</tr>
`

function criarConteudo(elementStr){
    const elementP = document.createElement(elementStr);
    elementP.innerText = "Mensagens dos Caras";

    return elementP;
}
result = criarConteudo('p')

const elementPai = document.body;
elementPai.appendChild(result)








console.log('result: ', result)