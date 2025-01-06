// let pessoa = {
//     nome: 'NND',
//     idade: 'IND',
//     sexo: 'SND',
//     CPF: 'CPFND',
    
//     caminhar: function caminhar() {
//         console.log(`${this.nome} está caminhando...`)
//     }
// }

// let saulo = Object.create(pessoa)

// saulo.nome = 'saulo'
// saulo.CPF = '073.302.883-73'
// saulo.idade = 18;
// saulo.sexo = 'macho'


// console.log(saulo.caminhar());

// function criaCachorro(raca, patas, cor) {
//     let cachorro= Object.create({})
//     cachorro.raca = raca
//     cachorro.cor = cor
//     cachorro.patas = patas
//     return cachorro
// }

// let guerreiro = criaCachorro('pincher', 4, 'preto')

// console.log(guerreiro)

// function Cachorro(raca, patas, cor) {
//     this.raca = raca
//     this.patas = patas
//     this.cor = cor
//     this.uivar = function(){
//         console.log('auuuuuuuuuuuuuuu')
//     }
// }

// Cachorro.prototype.latir = function() {
//     console.log('AuAu')
// }

// let husky = new Cachorro('Husky', 4, 'branco')

// console.log(husky.cor)

// husky.latir()

class Cachorro {
    constructor(raca, patas,cor) {
        this.raca = raca
        this.patas = patas
        this.cor = cor
    }
}

let pincher = new Cachorro('pincher', 4, 'preto')

console.log(pincher)