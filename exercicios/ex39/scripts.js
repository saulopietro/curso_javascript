class Carro{
    constructor(marca, cor, gasolinaRestante, autonomia){
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.autonomia = autonomia
    }


    andar(distancia){
        console.log('O carro está andando...')
        const gasto = distancia / this.autonomia
        this.gasolinaRestante = this.gasolinaRestante - gasto
    }
}

let meuCarro = new Carro('BMW', 'Preto', 44, 12)


meuCarro.andar(300)

console.log(meuCarro.gasolinaRestante)