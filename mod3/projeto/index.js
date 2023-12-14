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
        console.log(`${this.cliente.nome}, Você depositou R$ ${valor} reais, seu saldo atual é de R$ ${this.#saldo} Reais`)
    }
    sacar(valor){
        //fazer verificação 
        if(valor > this.#saldo){
            console.log(`${this.cliente.nome}, Você não tem saldo suficinete`)
        }else{
            this.#saldo -= valor
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

//Variáveis Globais
let contas = [];
let clientes = [];
let login = false;

//função para criar conta

function criarConta (nome, cpf, senha, tipoConta)  {
    const cliente = new Cliente (nome, cpf, senha);
    clientes.push(cliente);
    if(tipoConta == 'conta corrente'){
        const conta = new ContaCorrente (1, contas.length, cliente)
        console.log(conta.mostrarSaldo())
        return contas.push(conta)
    }else{
        const conta = new ContaPoupanca (1,contas.length, cliente)
        console.log(conta.mostrarSaldo())
        return contas.push(conta)
    }
}

//criando contas

criarConta('Luiza Mel', 147147, 147, 'conta corrente');
criarConta('Daniel Batista', 198198, 187, 'conta corrente');
criarConta('Miguel Dias', 147888, 882, 'conta corrente');
criarConta('Bruce Lee', 199199, 257, 'conta poupança');
criarConta('Leda Lee', 199888, 574, 'conta poupança');

//função para login

function Fazerlogin (cpf, senha) {
    let findCliente;
    login = false

    clientes.forEach(cliente => {
        if(cliente.cpf == cpf){
        findCliente = cliente;
        }
    
    });

    //login
    if(findCliente.cpf === cpf && findCliente.senha === senha){
        console.log(`Bem vindo(a) ${findCliente.nome}`)
        console.log(`Login realizado com sucesso`)
        login = true;
    }else{
        console.log(`CPF ou Senha inválidos`)
    }
}

//operações

function depositar (numeroConta, valor){
    let findConta;

    if(login === true){
        contas.forEach(conta => {
            if(conta.conta === numeroConta){
            findConta = conta;
            findConta.depositar(valor)
            }
        });
    }
}

function sacar (numeroConta, valor){
    let findConta;

    if(login == true){
        contas.forEach(conta => {
            if(conta.conta === numeroConta){
                findConta = conta;
                findConta.sacar(valor);
                return;
            }
        });
    }
}

function cobrarTaxaMnt (conta){
    let findConta;
    let data = new Date;
    let diahoje = data.getDate()
    for(let i = 0; i <= contas.length; i++){
        if(contas[i].conta == conta ){
            findConta = contas[i]
            break
        }else{
            i++
        }
    }
    if(diahoje == 28){
        findConta.cobrarTaxaMnt()
    }
}

function aplicarValor (conta){
    let findConta;
    let data = new Date;
    let diahoje = data.getDate()
    for(let i = 0; i <= contas.length; i++){
        if(contas[i].conta == conta ){
            findConta = contas[i]
            break
        }else{
            i++
        }
    }
    if(diahoje == 28){
        findConta.aplicar()
    }
}



// Fazerlogin(147888, 882);


// depositar(2, 300);
// sacar(2, 100);

// aplicarValor()
// cobrarTaxaMnt()

// criarConta('Luiza Mel', 147147, 147, 'conta corrente');
// criarConta('Daniel Batista', 198198, 187, 'conta corrente');
// criarConta('Miguel Dias', 147888, 882, 'conta corrente');
// criarConta('Bruce Lee', 199199, 257, 'conta poupança');
// criarConta('Leda Lee', 199888, 574, 'conta poupança');






