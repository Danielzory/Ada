let elementMain = document.getElementById('main');
//pegar elementos do storage

let numberOfMen = localStorage.getItem('numberOfMen');
let numberOfWoman = localStorage.getItem('numberOfWoman');
let numberOfChild = localStorage.getItem('numberOfChild');
let numberPeapleDrink = localStorage.getItem('numberPeapleDrink');
let totalPeaple = Number(numberOfMen) + Number(numberOfChild) + Number(numberOfWoman);

function renderInfo(){
let totalDivided = document.getElementById('total-divided');         
let totalNumber = document.getElementById('total');

totalDivided.innerHTML = `${numberOfMen} Homens - ${numberOfWoman} Mulheres - ${numberOfChild} Crianças`
totalNumber.innerHTML = `${totalPeaple} Convidados`   
}

function load(){
    renderInfo();
    renderTable();
}

window.onload = load();


function tMeat(){
    let tMeat = 0;
    let meatMan = Number(numberOfMen) * 0.4;
    let meatWoman = Number(numberOfWoman) * 0.32;
    let meatChild = Number(numberOfChild) * 0.2;

    tMeat = meatMan + meatWoman + meatChild;
    return tMeat.toFixed(2);
}
function tBread(){
    let tBread = 0;
    let breadAdult = (Number(numberOfMen) + Number(numberOfWoman)) * 2;
    let breadChild = Number(numberOfChild) * 1;

    tBread = breadAdult + breadChild;
    return tBread.toFixed(2);
}
function tCoal(){
    return totalPeaple * 1;
}
function tSalt(){
    return totalPeaple * 0,4;
}
function tIce(){
    let tIce = 0;
    let division = totalPeaple / 10;

    if(division <= 1){
        tIce = 5;
    }else{
        tIce =  division * 5;
    }

    return tIce;
}
function tCoke(){
    let tCoke = 0;
    let division = totalPeaple / 5;

    if(division <= 1){
        tCoke = 2;
    }else{
        tCoke = division * 2;
    }

    return tCoke.toFixed(0)
}
function tWater(){
    let tWater = 0;
    let division = totalPeaple / 5;

    if(division <= 1){
        tWater = 1;
    }else{
        tWater = division * 1;
    }

    return tWater.toFixed(0)
}
function tBeer(){
    let tBeer = Number(numberPeapleDrink) * 3;
    return tBeer.toFixed(0);
}
function renderTable(){
    let tableDiv = document.getElementById('div-table');
    tableDiv.innerHTML = `
    <table id="result-table">
    <tr class="main-th">
        <th>Item</th>
        <th>Quantidade</th>
    </tr>
    <tr>
        <th>Carne</th>
        <td>${tMeat()} Kg</td>
    </tr>
    <tr>
        <th>Pão de alho</th>
        <td>${tBread()} Unidades</td>
    </tr>
    <tr>
        <th>Refrigerante</th>
        <td>${tCoke()} Garrafa de 2L</td>
    </tr>
    <tr>
        <th>Água</th>
        <td>${tWater()} Garrafa de 1L</td>
    </tr>
    <tr>
        <th>Cerveja</th>
        <td>${tBeer()} Garrafa de 600ml</td>
    </tr>
    <tr>
        <th>Carvão</th>
        <td>${tCoal()} Kg</td>
    </tr>
    <tr>
        <th>Sal</th>
        <td>${tSalt()} Kg</td>
    </tr>
    <tr>
        <th>Gelo</th>
        <td>${tIce()} Kg</td>
    </tr>
    
</table>
` //fechamento da tabela
}

const newCalc = document.getElementById('new');
newCalc.addEventListener('click', newChurras);

function newChurras(){
    window.alert('Esse App te ajudou? Espero que tenha gostado')

    localStorage.removeItem('numberOfMen');
    localStorage.removeItem('numberOfWoman');
    localStorage.removeItem('numberOfChild');

    setTimeout(()=>{
        window.location.href = `http://127.0.0.1:5500/index.html`;
    }, 1500)

    elementMain.innerHTML = '<h1 class="load-main head-container">Opa! em breve você poderá calcular novamente</h1>'
}