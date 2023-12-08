//ex1

const carro = {
    marca: "fiat",
    modelo: "Argo",
    ano: 2020,
    cor: "branco"
}

//ex2

const circulo = {
    raio: 3,
    calcularAreal(){
        const pi = 3.14;
        const area = pi*(raio**2);  
        
        return area;
    }
}

//ex3

const aluno = {
    nome: 'Daniel',
    idade: 28,

    mostrarInformacoes(){
        console.log(`Nome do aluno: ${this.nome} - idade do aluno: ${this.idade}`)
    }
}

// ex4

const livro = {
    titulo: "Harry Potter",
    autor: "J.K Rowling",
    paginas: 223,

    detalhes: function(){
        console.log(`Livro: ${this.titulo} - Autor: ${this.autor} - Número de páginas: ${this.paginas} páginas`);
    }

}

//ex5

class Retangulo {
    constructor(largura,altura){
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(){
        console.log(this.largura * this.altura);
    }
}

// const retangulo1 = new Retangulo(3,4);
// retangulo1.calcularArea();

