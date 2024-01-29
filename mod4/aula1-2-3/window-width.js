let result;
let result2;

result = window.innerWidth;
result2 = window.outerWidth;


window.addEventListener('resize', function(){
    result = window.innerWidth;
    result2 = window.outerWidth;  
    
    if (result < 900){
        console.log('Mobile: ')
    }else{
        console.log('Desktop: ')
    }
});










