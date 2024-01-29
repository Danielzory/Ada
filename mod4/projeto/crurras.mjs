//variáveis globais

let elementMain = document.getElementById('main')
let numberOfMenTxt = document.getElementById('number-men')
let numberOfWomanTxt = document.getElementById('number-woman')
let numberOfChildTxt = document.getElementById('number-child')
let numberPeapleDrinkTxt = document.getElementById('number-peaple-drink')
let formUrl = new URL ('http://127.0.0.1:5500/form.html')
let tableUrl = new URL ('http://127.0.0.1:5500/table.html')
let indexUrl = new URL ('http://127.0.0.1:5500/index.html')

let numberOfMen = 0;
let numberOfWoman = 0;
let numberOfChild = 0;
let numberPeapleDrink = 0;




//increase and decrease numbers

//man
const plusMan = document.getElementById('plus-man')
plusMan.addEventListener('click', () => {
    if(numberOfMen >= 0){
        numberOfMen ++;
        rederNumber(numberOfMenTxt, numberOfMen)
    }else{
        window.alert("O número de convidados deve ser maior que 0")
    } 
})

const lessMan = document.getElementById('less-man')
lessMan.addEventListener('click', () => {
    if(numberOfMen > 0){
        numberOfMen --;
        rederNumber(numberOfMenTxt, numberOfMen)
    }else{
        window.alert("O número de convidados deve ser maior que 0")
    } 
})

//woman
const plusWoman = document.getElementById('plus-woman')
plusWoman.addEventListener('click', () => {
    if(numberOfWoman >= 0){
        numberOfWoman ++;
        rederNumber(numberOfWomanTxt, numberOfWoman)
    }else{
        window.alert("O número de convidados deve ser maior que 0")
    } 
})

const lessWoman = document.getElementById('less-woman')
lessWoman.addEventListener('click', () => {
    if(numberOfWoman > 0){
        numberOfWoman --;
        rederNumber(numberOfWomanTxt, numberOfWoman)
    }else{
        window.alert("O número de convidados deve ser maior que 0")
    } 
})
//child
const plusChild = document.getElementById('plus-child')
plusChild.addEventListener('click', () => {
    if(numberOfChild >= 0){
        numberOfChild ++;
        rederNumber(numberOfChildTxt, numberOfChild)
    }else{
        window.alert("O número de convidados deve ser maior que 0")
    } 
})

const lessChild= document.getElementById('less-child')
lessChild.addEventListener('click', () => {
    if(numberOfChild > 0){
        numberOfChild --;
        rederNumber(numberOfChildTxt, numberOfChild)
    }else{
        window.alert("O número de convidados deve ser maior que 0")
    } 
})
//drunks
const plusDrunk = document.getElementById('plus-peaple-drink')
plusDrunk.addEventListener('click', () => {
    let adults = Number(numberOfMen) + Number(numberOfWoman); 
    if(numberPeapleDrink >= 0 && numberPeapleDrink < adults){
        numberPeapleDrink ++;
        rederNumber(numberPeapleDrinkTxt, numberPeapleDrink)
    }else{
        window.alert("Lembrando que menores de 18 anos não podem beber")
    } 
})

const lessDrunk = document.getElementById('less-peaple-drink')
lessDrunk.addEventListener('click', () => {
    if(numberPeapleDrink > 0){
        numberPeapleDrink --;
        rederNumber(numberPeapleDrinkTxt, numberPeapleDrink)
    }else{
        window.alert("O número de convidados deve ser maior que 0")
    } 
})

const calcButton = document.getElementById('use-button')
calcButton.addEventListener('click', bringForm)
//------------------------------------------------------------------------
function rederNumber(varrTxt, numberOf){
    varrTxt.innerHTML = numberOf
}

function bringForm(){
    setTimeout(()=>{
        window.location.href = formUrl;
    }, 3000)

    saveData()
    elementMain.innerHTML = '<h1 class="load-main head-container">Calculando...</h1>'
}  

function bringTable(){
    setTimeout(()=>{
        window.location.href = tableUrl;
    }, 3000)

    elementMain.innerHTML = '<h1 class="load-main head-container">Aguarde, estamos carregando o resultado para seu chrrasco...</h1>'
}

// salvar no storage
function saveData(){
    localStorage.setItem('numberOfMen', numberOfMen)
    localStorage.setItem('numberOfWoman', numberOfWoman )
    localStorage.setItem('numberOfChild', numberOfChild )
    localStorage.setItem('numberPeapleDrink', numberPeapleDrink )
}









