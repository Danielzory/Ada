//variáveis globais
let nomeDoc = document.getElementById('nome');
let cpfDoc = document.getElementById("cpf");
let senhaDoc = document.getElementById("senha");

let getArea = document.getElementById("mudaPagina");
let contaDoc = document.getElementById("conta");
let loginArea = document.getElementById("login");
let criarArea = document.getElementById("criarConta");


class Cliente {
    static ContaCorrente;
    static ContaPoupanca;
    constructor(nome, cpf, senha) {
        this.nome = nome,
        this.cpf = cpf,
        this.senha = senha
    }
    mostrar(){
        console.log(`Cliente: ${this.nome} - CPF:${this.cpf}`);
    } 
}

class Conta {
        #saldo;
    constructor(agencia, conta, cliente){
        this.conta = conta,
        this.agencia = agencia,
        this.cliente = cliente,
        this.#saldo = 0;
    }
    mostrarSaldo(){
        console.log(`Cliente: ${this.cliente.nome} - Agência: ${this.agencia} - Conta: ${this.conta} - Saldo ${this.#saldo}`)
    }
    depositar(valor){
        this.#saldo += valor
        getArea.innerHTML += `<p>${this.cliente.nome}, Você depositou R$ ${valor} reais, seu saldo atual é de R$ ${this.#saldo} Reais</p>`
        console.log(`${this.cliente.nome}, Você depositou R$ ${valor} reais, seu saldo atual é de R$ ${this.#saldo} Reais`)
    }
    sacar(valor){
        //fazer verificação 
        if(valor > this.#saldo){
            console.log(`${this.cliente.nome}, Você não tem saldo suficinete`)
        }else{
            this.#saldo -= valor
            getArea.innerHTML += `<p>${this.cliente.nome}, Você sacou R$ ${valor} reais, seu saldo atual é de R$ ${this.#saldo} Reais</p>`
            console.log(`${this.cliente.nome}, Você sacou R$ ${valor} reais, seu saldo atual é de R$ ${this.#saldo} Reais`) 
        }
    }
    descontoSaque(){
        this.#saldo -= 2
        console.log(`DESCONTO de R$ 2,00 por saque direto da conta Poupança`)
    }
    aplicar(){
        this.#saldo += this.#saldo * 0.02
    }
    taxaMNT(){
        if(this.#saldo > 0){
            this.#saldo -= 7.65;
        }
    }
    
}

class ContaPoupanca extends Conta {
    constructor(agencia, conta, saldo){
        super(agencia, conta, saldo);
    }
    sacar(valor){
        super.descontoSaque()
        super.sacar(valor)
    }
    depositar(valor){
        super.depositar(valor)
    }
    mostrarSaldo(){
        super.mostrarSaldo()
    }
    aplicar(){
        super.aplicar();
        this.mostrarSaldo()
        console.log(`Seus investimentos renderam uma graninha este mês!`)
    }
}

class ContaCorrente extends Conta {
    constructor(agencia, conta, saldo){
        super(agencia, conta, saldo);
    }
    sacar(valor){
        super.sacar(valor)
    }
    depositar(valor){
        super.depositar(valor)
    }
    mostrarSaldo(){
        super.mostrarSaldo()
    }
    cobrarTaxaMnt(){
        super.taxaMNT();
        console.log(`Taxa de manutenção da conta: R$ 7,65`);
        this.mostrarSaldo();
    }
}

//Arrays
let contas = [];
let clientes = [];


//função para criar conta

function criarConta ()  {
    let nome = nomeDoc.value;
    let cpf = cpfDoc.value;
    let senha = senhaDoc.value;
    let tipoConta = document.querySelector("input[name=tipoConta]:checked").value;

    
    const cliente = new Cliente (nome, cpf, senha);
    clientes.push(cliente);

    console.log(tipoConta)

    if(tipoConta == 'Conta corrente'){
        const conta = new ContaCorrente (1, 100 + contas.length, cliente)
        getArea.innerHTML += `<p>Cliente:${cliente.nome} - Conta: ${conta.conta}</p>`
        console.log(conta.mostrarSaldo())
        console.log(cliente)
        return contas.push(conta);
    }else{
        const conta = new ContaPoupanca (1, 200 + contas.length, cliente)
        getArea.innerHTML += `<p>Cliente:${cliente.nome} - Conta: ${conta.conta}</p>`
        console.log(conta.mostrarSaldo())
        console.log(cliente.tipoConta)
        return contas.push(conta);
    }
    
}

//Opreações disponíveis

function depositar (){
    let findConta;
    let login = true;
    let getConta = prompt('Digite o número da Conta');
    let getValor = prompt('Digite o Valor que deseja depositar');

    if(login === true){
        contas.forEach(conta => {
            if(conta.conta == getConta){
            findConta = conta;
            findConta.depositar(Number(getValor))
            }
        });
    }
}

function sacar (){
    let findConta;
    let login = true;
    let getConta = prompt('Digite o número da Conta');
    let getValor = prompt('Digite o Valor que deseja depositar');

    if(login == true){
        contas.forEach(conta => {
            if(conta.conta == getConta){
                findConta = conta;
                findConta.sacar(Number(getValor));
                return;
            }
        });
    }
}

//função para login
function fazerlogin () {
    let findConta;
    let cpf = (cpfDoc.value);
    let senha = (senhaDoc.value);
    let numeroConta = contaDoc.value;
    login = false

    contas.forEach(conta => {
    if(conta.conta == numeroConta){
    findConta = conta;
    }
    }); 

    //login
    if(findConta.cliente.cpf == cpf && findConta.cliente.senha == senha){
        console.log(`Bem vindo(a) ${findConta.cliente.nome}`)
        console.log(`Login realizado com sucesso`)
        login = true;
        
        getArea.innerHTML = `<div id="apresenta">
        <h2>Bem vindo ${findConta.cliente.nome} - Conta ${findConta.conta}</h2> 
        <div id="buttons">
        <button class="formButton" onclick="depositar()">Depositar</button>
        <button class="formButton" onclick="sacar()">Sacar</button>
        </div>
        </div>`
        criarArea.innerHTML =``;
        loginArea.innerHTML=``;
    }else{
        console.log(`CPF ou Senha inválidos`)
    }

}









//operações para implementar futuramente

// function cobrarTaxaMnt (conta){
//     let findConta;
//     let data = new Date;
//     let diahoje = data.getDate()
//     for(let i = 0; i <= contas.length; i++){
//         if(contas[i].conta == conta ){
//             findConta = contas[i]
//             break
//         }else{
//             i++
//         }
//     }
//     if(diahoje == 28){
//         findConta.cobrarTaxaMnt()
//     }
// }

// function aplicarValor (conta){
//     let findConta;
//     let data = new Date;
//     let diahoje = data.getDate()
//     for(let i = 0; i <= contas.length; i++){
//         if(contas[i].conta == conta ){
//             findConta = contas[i]
//             break
//         }else{
//             i++
//         }
//     }
//     if(diahoje == 28){
//         findConta.aplicar()
//     }
// }

