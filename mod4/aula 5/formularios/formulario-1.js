const meuForm = document.getElementById('meuFormulario');
const nome = document.getElementById('nome')

function enviarFormulario(event) {
    event.preventDefault();
    const thisForm = event.target;

    // const nome = thisForm.querySelector('#nome')
    // const email = thisForm.querySelector('#email')
    // const idade = thisForm.querySelector('#idade')
    // console.log(nome.value)


    const formData = new FormData(thisForm);
    // const values = [... formData.values()]

    // values.forEach(item => {
    //     console.log('Item atual ==> ', item)
    // });


    const checkNome = formData.get('nome');

    if(!checkNome){
        nome.classList.add('erro')
    }
}


function limparFormulario (){
    meuForm.reset();
}