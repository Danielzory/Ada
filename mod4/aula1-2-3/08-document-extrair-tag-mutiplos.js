let result;

result = document.images;
result = document.images[0];
result = document.links;
result = document.scripts;

result = document.getElementsByTagName('img')

const eleHTMLColection = document.getElementsByClassName('borda')
const elemNodeList = document.querySelectorAll('.borda')


//no html colection n funciona foreach porem ambos funcionam no for


elemNodeList.forEach(element =>{
    console.log('Element elementNodeList: ', element)
})

// se usar spred dá pra usar for each

const arr = [... eleHTMLColection]

arr.forEach(colection =>{
    console.log('Element htmlColection: ', colection)
})



//console.log("Result: ", result);