let carro = {
    portas: 4,
    portamalas: '200L',
    motor: 2.0,
    vidroEletrico: true
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);