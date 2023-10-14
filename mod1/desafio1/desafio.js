function mostrarTela (dado){
    
    const retorno = document.getElementById('retorno')

    retorno.innerHTML += `<hr>
     <li class='res'> <strong>Nome</strong>: ${dado.name} |       <strong>Ano de nascimento:</strong> ${dado.borned} | <strong>E-Mail:</strong> ${dado.mail} | <strong>Senha:</strong> ${dado.secret} | <strong>Termos:</strong>${dado.check}</li> `
}

const form1 = document.getElementById('form1')  //seleciona o elemento <form>

form1.addEventListener('submit', evento => {
    evento.preventDefault(); //desativa comprotamento padrão do evento


    const formDado = new FormData(form1);
    const dado = Object.fromEntries(formDado);

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/jason'
        },
        body: JSON.stringify(dado) //transformando os dados em JSON
     }).then(res => res.json()).then(data => console.log(dado));

     fetch('https://reqres.in/api/users', {
        method: 'GET',
        headers: {
            'Content-Type':'application/jason'
        },
    }).then(res => res.json()).then(data => mostrarTela(dado));


})

