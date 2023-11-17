const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];

const frutas = ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão'];

const legumes = ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'];

const verdura = ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga'];


function contaNumerosItens () {
    let totalFrutas = 0;
    let totalLegumes = 0;
    let totalVerduras = 0;

    for (let i = 0; i <= hotifrutis.length; i++){
        if(hotifrutis.includes(frutas[i])){
            totalFrutas ++
        }
    }
    for (let j = 0; j <= hotifrutis.length; j++){
        if(hotifrutis.includes(legumes[j])){
            totalLegumes ++
        }    
    }
    for (let l = 0; l <= hotifrutis.length; l++){
        if(hotifrutis.includes(verdura[l])){
            totalVerduras ++
        }    
    }

    console.log(`Existem ${totalFrutas} frutas nesta lista`);
    console.log(`Existem ${totalLegumes} Legumes nesta lista`);
    console.log(`Existem ${totalVerduras} verduras nesta lista`);
}


contaNumerosItens();