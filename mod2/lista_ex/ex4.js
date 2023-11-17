const alunos = [
    { nome: 'Ana', notas: [7, 8, 9] },
    { nome: 'Pedro', notas: [5, 6, 7] },
    { nome: 'Maria', notas: [9, 8, 10] },
    { nome: 'João', notas: [6, 7, 8] },
    { nome: 'Lucas', notas: [8, 9, 7] },
    { nome: 'Julia', notas: [10, 8, 9] }
]


function calcMedia (alunos){
    novaLista = alunos.map(mediaAluno => {

        let media = mediaAluno.notas.reduce((acc,valor) => (acc + valor) / 3);   

        return{
            nome: mediaAluno.nome,
            media: media.toFixed(2)
        }    
    })

        console.log(novaLista);
}  
      
calcMedia(alunos);