// festa secreta

class FestaSurpresa {
    #local;
    #hora;
    #senha;
    constructor(local, hora, senha){
        this.#local = local;
        this.#hora = hora;
        this.#senha = senha
    }

    detalhes(senha){
        if (senha === this.#senha) {
            return `Local: ${this.#local}, Hora: ${this.#hora}`;
        }else{
            return "Espertinho... Acho que você não foi convidado"
        }
    }

}


// let festa = new FestaSurpresa('Recife', '21:00',"secreto");
// console.log(festa.detalhes("senha"))
// console.log(festa.detalhes("secreto"))

class DiarioSuperHeroi {
    #senha;
    constructor(segredos, missoes, senha){
        this.segredos = segredos;
        this.missoes = missoes;
        this.#senha = senha 
    }
    lerSegredo(senha){
        if (senha === this.#senha){
            console.log(`Missão: ${this.missoes} - O grandes mistério desta missão é: ${this.segredos}`)
        }else{
            console.log(`Boa tentativa haha, você pode até ser bom, mas o MAgo é IMPLACAVEL!`)
        }
    }
}

// const tentativa = new DiarioSuperHeroi ('A senha para acessar a porta eletrônica é "motherMilk-007" - Pierre vai estar a esperar', 'A Ajuda Inesperada', 'vocenaosabe159');
// tentativa.lerSegredo('senhaboa')
// tentativa.lerSegredo('vocenaosabe159')

class MagicBox {
    #palavraMagica;
    #senhaMega;
    #desencalhando;
    constructor(palavraMagica, senhaMega, desencalhando){
        this.#palavraMagica = palavraMagica;
        this.#senhaMega = senhaMega;
        this.#desencalhando = desencalhando
    }
    abracadabra(palavraMagica){
        if(this.#palavraMagica === palavraMagica){
            console.log(`O número da MEGA da Virada em 2023 é ${this.#senhaMega} e o segredo para desencalhar é ${this.#desencalhando}.`)
        }else{
           console.log(`Acho melhro você estudar e usar desodorante...`) 
        }
    }
}

const caixaMagica = new MagicBox ('teclas' ,'12 58 69 32 44 78', 'Seja você mesmo, porém legal')
caixaMagica.abracadabra('teclas')