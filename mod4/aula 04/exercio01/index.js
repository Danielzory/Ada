const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
let lista = [];


addButton.addEventListener('click', onClickAdd)
addButton.addEventListener('click', onClickRemove)


function renderizar(){

}

function onClickAdd(){
    const strPrompt = prompt('Add tarefa');
    
    if( strPrompt.trim() ){
        lista.push(strPrompt)
        salvar();
    }
   
    console.log('strPrompt:', lista)
}
function onClickRemove(){
    
}

function salvar(){
    localStorage.setItem( 'lista',JSON.stringify(lista)  );
}