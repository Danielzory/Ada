//--------ex1-----------
let arrNum = [1,5,10,20,25]

function somaArray(arrNum){
    let resultado = 0;

    arrNum.forEach(numero => {
        resultado = resultado + numero;
    });
    return resultado;
}
//--------ex2------------------

function maiorNumero(arrNum){
    let maior = 0;
    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i] > maior){
            maior = arrNum[i]
        }
    }    
    return maior
}
//--------ex3-----------------
function mediaArray(arrNum){
    let media = 0;
    let resultado = 0;
    arrNum.forEach(numero => {
        resultado = resultado + numero;
    });
    media = resultado / arrNum.length
    return media.toFixed(2)
}
//---------ex4--------------
let obj = {nome: 'Daniel', idade: '28', passaTempo: 'Jogar'};
let obj2 = {carro: 'Fusca', moto: 'Fazer'}

function contaPropiedade (obj){
    return Object.keys(obj).length
}
//---------ex5----------------------------------

function juntaObjeto(obj,obj2){
    let newObject = Object.assign({}, obj, obj2)    
    return newObject
}
//-----------ex6-------------------------------

function encontraPropiedade(obj, prop){
    let resultado = obj[prop];

    if(resultado){
        return resultado
    }else{
        return false
    }
}

//----------------ex7---------------------
async function delayedPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Resolvida depois de 1s')
        }, 1000)
    });
}
//------------------ex8-------------------
async function fetchData(){
    const resultado = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((res)=> res.json())
    const resultadoConvertidoJson = await resultado;
    return resultadoConvertidoJson
}
//---------------ex9----------------------
async function geraNumAleatorio(){
    let multiplicador = 100;
    let numeroAleatorio = Math.floor(Math.random() * multiplicador)
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(numeroAleatorio);
        }, 2000)
    })
}

//-------ex10------------------
function ola(){
    window.alert('Hello, world!')
}
function executaAposTempo(funcao, tempo){
    setTimeout(funcao, tempo)
}
//--------ex13-----------------
function contadorIntervalo(){
    let contador = 0;
    let numeros = document.getElementById('numeros')

    const intervalo = setInterval(()=>{
        numeros.innerHTML = contador
        contador ++;

        if(contador > 10){
            clearInterval(intervalo);
            numeros.innerHTML += '<br>Fim da contagem</br>'
        }
    },1000)
}



//--------ex16----------------------------------
//daria pra fazer de outra forma, mas fiz assim pq é para (obrigado) desestruturar
let veiculos = ['carro', 'moto', 'van']

function primeiroEUtimo(arr){
    let [e1,,en] = arr
    let newVeiculos = [e1,en]
   
    return newVeiculos
}
//-------ex17------------------------------
let pessoas = [{
    nome: 'Daniel',
    idade: 28
},{
    nome: 'Fernanda',
    idade: 30
}]

function extrairInfo(arrObj){
    let [e1, e2] = arrObj
    let soIdade = [e1.idade, e2.idade]
    return soIdade
}
//---------------ex18-----------------------------------------

let numeros = [1,5,8,4,10,15,12]

function separarArrays(arr){
    let pares = [];
    let impares = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            pares.push(arr[i])
        }else{
            impares.push(arr[i])
        }
    }
    return [pares,impares]
}
//------------------ex19------------------------------
let clientes = {nome: 'Gonçalves Brito', idade: 58, cidade: 'Recife'}

function infoPessoa(obj){
    const { nome, idade, cidade} = obj
    let infoPessoal = `Bem Vindo ${nome} - idade: ${idade} da cidade de ${cidade}`
    return infoPessoal
}
//---------------------ex20-----------------------------
let usuario = {id: 1, nome: 'Gabriel', email: 'gabrieltop@algo.com'}

function destruturaUsuario(obj){
    const {id, nome, email} = obj
    let resumo = {id, email}
    return resumo;
}
//---------------------ex21--------------------------------
const livro = {nome: 'Como estudar certo', autor: 'Thales Ocata', ano: 2019}

function infoLivros(obj){
    const {nome: titulo, autor, ano: anoPublic} = obj
    let apresentaçãoLivro = `O livro "${titulo}", foi publicado em ${anoPublic} e escrito por ${autor}`

    return apresentaçãoLivro
}
//----------------------ex22---------------------------------
const crianças = [{nome: 'Felicia', idade: 5}, {nome: 'Brian', idade: 6}];
const pais = [{nome: 'Maria', idade: 30}, {nome: 'Lucas', idade: 28}];
const professores = [{nome: 'Marta', idade: 20}, {nome: 'Zeca', idade: 58}];


function concatArrays(arr, arr2, ...rest){
    let todos = [arr, arr2, rest]
    return  todos
}
//----------------------ex22-------------------------------------
function somaNumeros(...rest){
    let soma = 0;   
    rest.forEach((numero)=>{
        soma = soma + numero
    })
    return soma
}
//--------------------ex23---------------------------------------
let jogos = {titulo: 'MegamenX', status: 'Não zerei'}
let curso = {curso: 'Inglês Avançado', andamento: 'Concluido'}

function mesclaObjetos(...rest){
    let planos2024 = {...rest}
    return planos2024
}