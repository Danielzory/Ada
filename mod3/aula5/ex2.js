class NaveEspacial {
    constructor(nome, velMax, maxTrip){
        this.nome = nome,
        this.velMax = velMax,
        this.maxTrip = maxTrip
        this.vel0 = 0;
        this.tripAtual = 0;
    }

    acelerar(){
        console.log(`A ${this.nome} atingiu a velocidade máxima de ${this.velMax} Km/s`)
    };
    addTrip(numTripAdd){

    };
}