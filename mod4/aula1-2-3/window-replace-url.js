let result;

//parametros começam com ? e os próximnos &
//pegar query/searchs de uma url
//result = window.location.search;

const urlSearchPams = new URLSearchParams(window.location.search)
result = urlSearchPams.get('param1');

//att parametro

urlSearchPams.set('param1', 'param1Att');
console.log('Result: ',urlSearchPams.get('param1'));

const newURL = ` ${window.location.origin}${window.location.pathname}?${urlSearchPams.toString()}`;

console.log(newURL);



//se ficar fora da função vai entrar em loop

function trocarURL(){
    window.location.replace(newURL);
    console.log('Timer works');
};


setTimeout(trocarURL,15000);
