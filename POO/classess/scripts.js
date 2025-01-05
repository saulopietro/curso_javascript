let pessoa = {
    nome: 'NND',
    idade: 'IND',
    sexo: 'SND',
    CPF: 'CPFND',
    
    caminhar: function caminhar() {
        console.log(`${this.nome} está caminhando...`)
    }
}

let saulo = Object.create(pessoa)

saulo.nome = 'saulo'
saulo.CPF = '073.302.883-73'
saulo.idade = 18;
saulo.sexo = 'macho'


console.log(saulo.caminhar());