const btLight = document.getElementById('btLight')
const btDark = document.getElementById('btDark');

btLight.addEventListener("click", onClickBtLight);
btDark.addEventListener("click", onClickBtDark);

function onClickBtLight(e){
   e.target.classList.toggle('destaque-light')
   document.body.classList.add('light');
   document.body.classList.remove('dark');
};

function onClickBtDark(e){
    e.target.classList.toggle('destaque')
    document.body.classList.add('dark');
    document.body.classList.remove('light');
};


   