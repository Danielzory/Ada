
const url = new URL(window.location.href)

//att parametro
url.searchParams.set('param1', 'Conteurodatt')



function trocarURL(){
    window.location.href = url.href;
    console.log('Timer works');
};
setTimeout(trocarURL,15000);

console.log('url: ', url.searchParams.get('param1'));