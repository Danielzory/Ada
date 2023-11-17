const contactList = [
    {
        nome: 'Manoel Coelho',
        telefone: '(81) 7070-0001',
        endereço: {
            rua: 'Rua das Rosas',
            numero: 10,
            bairro: 'Vaso da Gama'
        },
        nascimento: '1990-10-22'
    },
    {
        nome: 'Dany Fera',
        telefone: '(81) 7070-0002',
        endereço: {
            rua: 'Rua das Orquídeas',
            numero: 10,
            bairro: 'Jarro da Gama'
        },
        nascimento: '1995-11-22'
    },
    {
        nome: 'Felipe Cavalo',
        telefone: '(81) 7070-0003',
        endereço: {
            rua: 'Rua das Tulipas',
            numero: 10,
            bairro: 'Pote da Gama'
        },
        nascimento: '1980-03-25'
    },
    {
        nome: 'Megan Fox',
        telefone: '(81) 7070-0004',
        endereço: {
            rua: 'Rua das Flores',
            numero: 10,
            bairro: 'Ampula da Gama'
        },
        nascimento: '1999-08-30'
    }
]

//

function printList (list) {

    for (let i = 0; i < contactList.length; i++){
        console.log(`----------------------------------------------CONTATO ${i+1}---------------------------------------------------------`)
        console.log(`Nome: ${contactList[i].nome} -- Telefone: ${contactList[i].telefone} -- Endereço: ${contactList[i].endereço.rua}, ${contactList[i].endereço.numero}, ${contactList[i].endereço.bairro}`)
    }


}

printList(contactList);