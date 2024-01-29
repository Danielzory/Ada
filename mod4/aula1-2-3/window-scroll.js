let result;



history.scrollRestoration = 'manual';

window.scrollTo(0,665);

window.addEventListener('scroll' , function(){
    result = window.scrollY;
    console.log('Result: ', result);
});

