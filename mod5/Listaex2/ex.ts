//01 ts - soma------------------------
let numeros = [1,2,3,4,5,10,15,13];

const somaArr = () => {
    let soma = 0
    numeros.forEach((num)=>{
        soma = soma + num
    })
    return soma
}
somaArr()

// 02 ts - interface------------------------
// type Estudante = {
//     nome: string,
//     idade: number,
//     curso: string
// }

// const estudante1: Estudante = {
//     nome: 'Ebert',
//     idade: 20,
//     curso: 'Geografia'
// }

//03 ts - Funções e tipos--------------------


// const quadrado = (numero: number) =>{
//     let resultado = 0;
//     resultado = numero * numero

//     return resultado
// }

// 04 ts - Callback e arrays
let arrCarros = ['Fusca', 'Vectra', 'Gol', 'Palio', 'Corsa', 'Ka', 'Argo']

const findCar = (car) => {
    let result = arrCarros.indexOf(car)

    if(result !== -1){
        return true 
    }else{
        console.log('Carro não encontrado')
        return false
    }
}
 // 05 ts Objetos e Métodos -------------------
 const carro1 = {
    modelo: 'BMW 320i',
    ano: '2015',
    cor: 'Branco'
 }

 const sayColor = (obj) =>{
    let resultado = `Você selecionou o ${obj.modelo} do ano ${obj.ano} e da cor ${obj.cor}`
    console.log(resultado)
    return resultado
 }

// 06 ts Arrays e Callbacks ---------------------------
const onlyPares = (arr) => {
    let pares = arr.filter((num)=> num % 2 === 0)

    console.log(pares)
}

//onlyPares(numeros)

//07 ts Objetos e métodos -------------------------
const livro1 = {
    nome: 'StarField',
    autor: 'Blizard',
    nPaginas: 160
}

const nPaginas = (obj) => obj.nPaginas;

//console.log(nPaginas(livro1))

//08 ts Funções e Tipos ----------------------

const upper = (arr) => {
    return arr.map((element)=> element.toUpperCase())
}

//console.log(upper(arrCarros))

//09 ts Callback e Objetos ----------------

const alunos = [{
    nome: 'Daniel',
    idade: '15',
    nota: 7
},
{
    nome: 'Diana',
    idade: '13',
    nota: 8
}]

const mediaDaTurma =(arr)=> {
    let soma = 0;
    arr.forEach((aluno)=>{
        soma = soma + aluno.nota
    })
    return soma / arr.length
}

//console.log(mediaDaTurma(alunos))

//10 ts Arrays e métodos ----------------------
const somaMaiorQueDez = (arr) => {
    let soma = 0;
    arr.forEach((num)=>{
        num > 10 ? soma = soma + num : 0
    })

    return soma
}

//console.log(somaMaiorQueDez(numeros))

//11 ts Objetos e interface ------------------

// interface Produtos {
//     nome: string;
//     preco: number;
//     estoque: number;
// }

// const produtos:Produtos[] = [
//     {nome: 'DualShock 4', preco: 250, estoque: 15},
//     {nome: 'Series X/S', preco: 339, estoque: 8},
//     {nome: '8Bitdo', preco: 189, estoque: 9}]

// 12 ts  Funções e tipos------------------

//const multiplica = (n1: number, n2: number) => n1 * n2

//13 ts Callbacks e Array---------------------
const livros2 = [
    {titulo: 'Pequeno baby', autor:'Bruno de Lucca', totalPaginas: 15},
    {titulo: 'Story of Gods', autor:'Gilvana Stark', totalPaginas: 955},
    {titulo: 'Guithar lords', autor: 'Sting Ray', totalPaginas: 210}]

const maisDe200 = (arr) => {
    console.log('Os seguintes livros possuem mais de 200 páginas')
    arr.forEach((livro)=>{
        if(livro.totalPaginas > 200){
            console.log(livro.titulo)
        }
    })
}

//maisDe200(livros2)

//14 ts Arrays  e metodos ------------------------
const maisDeTresLetras = (arr) =>{

    return arr.filter((elemento)=>{
       return elemento.length > 3 
    })
}

//console.log(maisDeTresLetras(arrCarros))

//15 ts Objetos e Métodos ---------------------
const celular = {
    marca: 'Motorola',
    modelo: 'c3',
    armazenamento: '250 mb'
}

const exibeDados = (obj) => {
    const mensagem = `O ${obj.marca} - ${obj.modelo}, possui a capacidade de armazenamento de ${obj.armazenamento}`
    return mensagem
}
//console.log(exibeDados(celular))

// 16 ts funções e tipos--------------

const somaImpares = (arr) =>{
    let resultado = 0;

    arr.forEach((numero)=>{
        numero % 2 !==0 ? resultado = resultado + numero : 0
    })

    return resultado
}

//console.log(somaImpares(numeros))

//17 ts funções e objetos-------------------------

const alunoMedia = [{nome: 'Tiago', media: 5.5},{nome: 'Dayse', media: 9},{nome: 'Cris', media: 8.5}]

const maiorMedia = (arr) => {
    let resultado = 0;
    let alunoMaiorMedia = ''


    arr.forEach((aluno)=>{
        if(aluno.media > resultado){
            resultado = aluno.media
            alunoMaiorMedia = aluno.nome
        }
    })

    return alunoMaiorMedia;
}

//console.log(maiorMedia(alunoMedia))

//18 ts Arrays Callback ------------

const dobra =(arr)=>{
   const resultado = arr.map((numero)=> numero * 2)
   return resultado
}

//console.log(dobra(numeros))

//19 ts Objetos e Interfaces----------

// interface Filmes {
//     titulo: string;
//     diretor: string;
//     lancamento: number
// }

// const filmesDoFuturo:Filmes[] = [{titulo:'The Toperama', diretor: 'Naruto', lancamento: 2044},{titulo:'Battle of me', diretor: 'Thomaz Guedes', lancamento: 2055}]

//20 ts Arrays e Métodos --------------

const produtos = [
    {nome: 'DualShock 4', preco: 250, estoque: 15},
    {nome: 'Series X/S', preco: 339, estoque: 8},
    {nome: '8Bitdo', preco: 189, estoque: 9}]

const totalEstoque= (arr) => {
    let resultado = 0;
    arr.forEach((elemento)=>{
        resultado = resultado + elemento.estoque
    })

    return resultado
}    

//console.log(totalEstoque(produtos))

// 21 ts Funções e Tipos

const checaNumero = (numero) => numero >= 0 ? true : false;

//console.log(checaNumero(-1))

//22 ts Callback e array----------------

const arrPares = [2,4,6,8]

const ehPar = (arr) =>{
    let resultado;

    arr.forEach((numero)=>{
        numero % 2 !== 0 ? resultado = false : resultado = true
    })

    return resultado
}

//console.log(ehPar(arrPares))

//23 ts Objetos e Métodos----------------

const pessoa = {
    nome: 'Billy',
    idade: 47,
    altura: 1.71
}

const ehAlto = ({altura}) =>{
    const msg = altura > 1.70 ? 'Alto' : 'baixo'
    return msg
}

//console.log(ehAlto(pessoa))

// 24 ts arrays e Callbacks

const comecaComA = (arr) =>{
    return arr.filter((elemento)=>elemento.startsWith('A'));
}

//console.log(comecaComA(arrCarros))

//25 ts Objetos e Interfaces ----------------

// interface Animal {
//     nome: string;
//     especie: string;
//     idade: number;
// }

// const animais:Animal[] = [
//     {nome: 'Feioso',especie: 'Gato', idade: 10},
//     {nome: 'Belo', especie: 'Rato', idade: 5},
//     {nome: 'Henrique', especie: 'Coruja', idade: 9}]

//26 ts Funções e tipos -------------------
const arrNumeros = [-1,2,0,85,-5,10]
const menorNumero = (arr) => {
    let menor = arr[0]

    arr.forEach((numero)=>{
       numero < menor ? menor = numero : 0
    })
    return menor
}

//console.log(menorNumero(arrNumeros))

//27 ts Callback e Objetos--------

const carrosEstoque = [
    {modelo: 'Fusion 2012', cor: 'Preto', preco: 35000},
    {modelo: 'Gol G5', cor: 'Branco', preco: 24000},
    {modelo: 'Astra 2011', cor: 'Prata', preco: 35500}
]

const carroMaisCaro = (arr) => {
 let preco = 0;
 let carroCaro;

 arr.forEach((carro)=>{
    if(carro.preco > preco){
        preco = carro.preco
        carroCaro = carro
    }
 })
 return carroCaro.modelo
}

//console.log(carroMaisCaro(carrosEstoque))

// 28 ts Arrays e Métodos----------

const repetidos = [1,3,1,4,5,3]

const naoReptidos = (arr) => {
    return arr.filter((numero, index)=>{   
        return arr.indexOf(numero) !== index
    })
}

//console.log(naoReptidos(repetidos))

// 29 ts Objetos e Métodos 

const casa = {
    nQuartos: 3,
    cor: 'cinza',
    endereco: 'Rua das cordilheiras, 465'
}

const infoCasa = ({nQuartos, cor}) => `Esta casa de cor ${cor} possui ${nQuartos} quartos`

//console.log(infoCasa(casa))

//30 ts Funções e tipos

// type ArrayMesmoCumprimento<T>= [T, T]

// const somaArray = (arr1:ArrayMesmoCumprimento<number>, arr2:ArrayMesmoCumprimento<number>): ArrayMesmoCumprimento<number>  =>{
//     const resultado: ArrayMesmoCumprimento<number> = [0, 0]

//     for(let i = 0; i<arr1.length; i++){
//         resultado.push(arr1[i] + arr2[i]);
//     }

//     return resultado
// }

// const arr1: ArrayMesmoCumprimento<number> = [1, 3]
// const arr2: ArrayMesmoCumprimento<number> = [5, -1]

// const resultSoma: ArrayMesmoCumprimento<number> = somaArray(arr1, arr2)

// console.log(resultSoma)




