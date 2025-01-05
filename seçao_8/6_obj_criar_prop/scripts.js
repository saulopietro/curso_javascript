let cachorro = {
    patas: 4,
    nome: 'Guerreiro',
    sexo: 'Macho',
    latir: function() {
        console.log('AU AU')
    }
}

cachorro.doente = false

console.log(cachorro.nome, cachorro.doente)