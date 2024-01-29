const btLight = document.getElementById('btLight')
const btDark = document.getElementById('btDark');

btLight.addEventListener("click", onClickBtLight);
btDark.addEventListener("click", onClickBtDark);

function onClickBtLight(){
    document.body.style.color = "#000001"
    document.body.style.backgroundColor = "#ffffff"
};

function onClickBtDark(){
    document.body.style.color = "#ffffff"
    document.body.style.backgroundColor = "#000001"
};

