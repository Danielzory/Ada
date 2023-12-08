console.log('-------------------EX1--------------------')
//ex1
class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano
    }

    mostrar(){
        console.log(`Marca: ${this.marca} - Modelo: ${this.modelo} - ano: ${this.ano}`)
    }

}

// const gol = new Carro('VW', 'gol', 1995);
// gol.mostrar();

// const corsa = new Carro('Chevrolet', 'Corsa', 2005)
// corsa.mostrar();
console.log('-------------------EX2-------------------')
//ex2
class Pessoa {
    constructor(nome, idade, cidade){
        this.nome = nome,
        this.idade = idade,
        this.cidade = cidade
    }
   
    apresentar(){
        console.log(`${this.nome}, tem ${this.idade} anos e mora na cidade de ${this.cidade}`)
    }
}

// const ricardo = new Pessoa('Ricardo Oliveira',7,'Recife');
// const katty = new Pessoa('Katya Paula',25,'Rio Branco');

// ricardo.apresentar();
// katty.apresentar();
console.log('-------------------EX3----------------------')
//ex3
class ContaBancaria {
    constructor(numeroConta, saldo, titular){
        this.numeroConta = numeroConta,
        this.saldo = saldo,
        this.titular = titular
    }
    depositar(valor){
        this.saldo += valor;
        console.log(`Seu saldo atual é R$ ${this.saldo} Reais`)
    }
    sacar(valor){
        this.saldo -= valor;
        console.log(`Seu saldo atual é R$ ${this.saldo} Reais`)
    }

}

// const contaLucas = new ContaBancaria(1,250,'Lucas Braga');
// contaLucas.depositar(100);
// contaLucas.sacar(100);
console.log(`-------------------EX4------------------`)
//ex4
class Circulo {
    constructor(raio){
        this.raio = raio
    }

    area(){
        let area = this.raio * Math.PI;

        console.log(`A area deste circulo é aproximadamente ${area.toFixed(2)}`)
    }
}

// const circuloP = new Circulo (5);
// circuloP.area();
// const circuloG = new Circulo (30);
// circuloG.area();
console.log(`-------------------EX5------------------`)
//ex5
class Livro {
    constructor(titulo, autor, anoPublic, indica){
        this.titulo = titulo,
        this.autor = autor,
        this.anoPublic = anoPublic,
        this.indica = indica
    }
    exibir(){
        console.log(`O Livro ${this.titulo} do autor ${this.autor}, foi publicado no ano de ${this.anoPublic}. Eu indico este livro?: ${this.indica}`)
    }
}

// const cabana = new Livro ('A Cabana','Willian Paul Young', 2007, 'Sim');
// const livroRuim = new Livro ('Livro Ruim da Gota','Um bem ruim', 2020, 'Não')

// cabana.exibir();
// livroRuim.exibir();

console.log(`-------------------EX6------------------`)
//ex6

class Retangulo{
    constructor(largura, altura){
        this.largura = largura,
        this.altura = altura
    }

    area(){
        let area = this.largura * this.altura;

        console.log(`O Retangulo de largura ${this.largura} e altura ${this.altura} tem areal igual a ${area}`)
    }
}

// const retangulo1 = new Retangulo (5,9);
// retangulo1.area();
console.log(`-------------------EX7------------------`)
//ex7
class Aluno {
    constructor(nome, matricula, listaNotas){
        this.nome = nome,
        this.matricula = matricula,
        this.listaNotas = listaNotas
    }
    media(){
        let soma = 0
        let media = 0
        for(let i = 0; i < this.listaNotas.length; i++){
            soma += this.listaNotas[i]
        }

        media = soma/parseFloat(this.listaNotas.length)
        console.log(media.toFixed(2))
    }
}
// const clara = new Aluno ('Clara',123,[10,8,8]);
// clara.media()

console.log(`-------------------EX8------------------`)
//ex8
class Triangulo {
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1,
        this.lado2 = lado2,
        this.lado3 = lado3
    }
    checar(){
        if((this.lado1 + this.lado2) > this.lado3){
            console.log('Trinagulo Válido')
        }else{
            console.log('Triangulo não válido')
        }
    }
    area(){
        let base = this.lado1;
        let altura = this.lado2;
        let area = (base * altura)/2;

        console.log(`A area deste triangulo de base  ${base} e altura ${altura} é igual a ${area}`)
    }
}

// const trinagulo1 = new Triangulo(5,3,7)
// const trinagulo2 = new Triangulo(5,5,15)
// trinagulo1.checar();
// trinagulo1.area();
// trinagulo2.checar();

console.log(`-------------------EX15------------------`)
//ex15
class Jogo{
    constructor(nome, genero, classEtaria){     
        this.nome = nome,
        this.genero = genero,
        this.classEtaria = classEtaria
    }
    exibir(){
        console.log(`O Jogo ${this.nome} é do gênero de ${this.genero} - recomendado para maiores de ${this.classEtaria} anos`)
    }
}

// const gta5 = new Jogo('GTA V', 'Ação', 16)
// const marioBross = new Jogo('Super Mario Bross', 'Aventura/Retrô', 3)
// gta5.exibir()
// marioBross.exibir()


console.log(`-------------------EX28------------------`)
//ex28

class CarroEsportivo{
    constructor(marca, ano, modelo, velMax){
        this.marca = marca,
        this.ano = ano,
        this.modelo = modelo,
        this.velMax = velMax,
        this.velAtual = 0
    }
    acelerar(){
        this.velAtual += 50;
        if(this.velAtual < this.velMax){
            console.log(`O ${this.modelo} esta a ${this.velAtual} Km/h`)
        }else{
            console.log(`O Carro atingiu a velocidade máxima de ${this.velMax}`)
        }
    }
    freiar(){
        this.velAtual-=100;
        if(this.velAtual >= 0){
            console.log(`O ${this.modelo} esta a ${this.velAtual} Km/h`)
        }else if(this.velAtual <= 0){
            console.log(`O ${this.modelo} parou`)
        }
    }
}

// const civicSi = new CarroEsportivo('Honda', 2007,'Civic Si', 230);
// civicSi.acelerar()
// civicSi.acelerar()
// civicSi.acelerar()
// civicSi.acelerar()
// civicSi.acelerar()
// civicSi.freiar()
// civicSi.freiar()
// civicSi.freiar()