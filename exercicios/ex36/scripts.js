class Conta {
    constructor(saldo){
        this.saldo = saldo
    }
    
    saque(valor) {
        this.saldo = this.saldo - valor
    }
    
    depositar(valor) {
        this.saldo = this.saldo + valor
    }
}


let saulo = new Conta(4000)

saulo.saque(2000)
saulo.saque(200)

saulo.depositar(700)


console.log(saulo.saldo)