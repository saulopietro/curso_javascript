const cachorro = { 
    nome: 'O nome nao esta definido',


    idade: `O(A) ${this.nome} tem ${this.idade} anos`,


    uivar: function(nome) {
        console.log('AUUUUUUU');
    },


    rosnar: function() {
        console.log('Grrrrrrrr');
    },


    setNome: function(nome) {
        this.nome = nome
    },


    setIdade: function(idade) {
        this.idade = idade
    },
}

cachorro.setNome('Guerreiro');

console.log(cachorro.nome)

cachorro.setIdade(12)

console.log(cachorro.idade)