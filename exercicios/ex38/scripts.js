class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    atualizarRua(novaRua) {
        this.rua = novaRua
    }

    atualizarBairro(novoBairro) {
        this.bairro = novoBairro
    }

    atualizarCidade(novaCidade) {
        this.cidade = novaCidade
    }

    atualizarRua(novoEstado) {
        this.estado = novoEstado
    }
}

let principal = new Endereco('Rua humanizada', 
    'Mocambinho 1',
    'Teresina',
    'Piaui',
)

console.log(principal)

principal.atualizarBairro('Mafrense')

console.log(principal)