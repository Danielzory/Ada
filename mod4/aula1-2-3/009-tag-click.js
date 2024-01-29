// document.body.addEventListener('click', function(event){
//     console.log(`Target: `, event.target)
//     console.log(`e: `, event)
//     console.log(`Current target: `, event.currentTarget)

// })

const btTop = document.getElementById('back-to-top')

btTop.addEventListener('click', onClickBtTop.bind(this,'meuTexto'));

// document.body.addEventListener('click', function(event){
//     window.scrollTo(0,0);
// });

//algum erro aqui - olhar no arquivo no lms
function onClickBtTop (param,event){
    console.log('Param: ', param)
    console.log('Event', event)
    window.scrollTo(0,0);
}

