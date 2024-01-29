//-------------------Formulário--------------------
let elementMain = document.getElementById('main');
let nextBtt = document.getElementById('next');
let backBtt = document.getElementById('back');

const registerBtt = document.getElementById('register')
registerBtt.addEventListener('click', register)



async function checkCEP(){
    let cepElement = document.querySelector('#cep');
    let cep = cepElement.value;
    
    if(cep.length !== 8){
        window.alert('O CEP deve conter oito dígitos');
        cepElement.classList.add('formFail');
        return
    }

    let apiUrl = `https://viacep.com.br/ws/${cep}/json/`

    try {
        fetch(apiUrl).then(function(response){
            response.json().then(function(data) {
                console.log(data)
                if(data.erro){
                    window.alert('CEP Inválido')
                    throw new Error('CEP Inválido')
                }else{
                    cepElement.classList.add('formSucess');
                }
            })
        })  
    } catch (error) {   
       window.alert('CEP inválido', error.message);
    }
};

function checkEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
};

function checkInputEmail(){
    let emailElement = document.getElementById('email');
    let email = emailElement.value.trim();

    if(!checkEmail(email)){
        window.alert('Por favor insira um E-mail válido')
        emailElement.classList.add('formFail');
        return false;
    }else if(email === ""){
        window.alert('Por favor insira um E-mail válido')
        return false  
    }else{
        emailElement.classList.add('formSucess')
        return true; 
    }
};

function save(){
    let emailElement = document.getElementById('email');
    let email = emailElement.value.trim();

    let cepElement = document.querySelector('#cep');
    let cep = cepElement.value;

    let nameElement = document.getElementById('name');
    let name = nameElement.value;


    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('cep', cep);
};

function bringTable(){
    setTimeout(()=>{
        window.location.href = `http://127.0.0.1:5500/table.html`;
    }, 3000)

    elementMain.innerHTML = '<h1 class="load-main head-container">Aguarde, estamos carregando o resultado para seu chrrasco...</h1>'
};
function bringIdex(){
    setTimeout(()=>{
        window.location.href = `http://127.0.0.1:5500/index.html`;
    }, 3000)

    elementMain.innerHTML = '<h1 class="load-main head-container">Ok! Carregando...</h1>'
};


function register(){
    let emailElement = document.getElementById('email');
    let email = emailElement.value.trim();
    const checkbox = document.getElementById('checkbox')

    if(checkbox.checked && checkEmail(email)){
        checkCEP()
        checkInputEmail()
        save()
        bringTable()
    }else{
        window.alert('Para proseguir, os termos devem ser aceitos')
    }
};

nextBtt.addEventListener('click', bringTable);
backBtt.addEventListener('click', bringIdex);




window.onload = function (){
    let emailElement = document.getElementById('email');
    let cepElement = document.querySelector('#cep');
    let nameElement = document.getElementById('name');

    emailElement.value = localStorage.getItem('email') || '';
    cepElement.value = localStorage.getItem('cep') || '';
    nameElement.value = localStorage.getItem('name') || '';

};