class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens
        this.qtd = qtd
        this.valorTotal = valorTotal
    }

    addItem(item) {

        let contador = 0;
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1
                }
            }

        if(contador == 0) {
            this.itens.push(item)
        }
        
        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;

        }
    }



let carrinho = new Carrinho([
    {
        id: 1,
        nome: 'Camisa',
        qtd: 1,
        preco: 20,
    },

    {
        id: 2,
        nome: 'Calça',
        qtd: 2,
        preco: 240
    }


],3, 500 )

carrinho.addItem({
    id: 1,
    nome: 'Camisa',
    qtd: 1,
    preco: 20,
}
)

carrinho.addItem({
    id: 2,
    nome: 'Calça',
    qtd: 2,
    preco: 240
})

carrinho.addItem({
    id: 3,
    nome: 'Casaco',
    qtd: 1,
    preco: 120

})

carrinho.addItem({
    id: 4,
    nome: 'boné',
    qtd: 1,
    preco: 50

})

console.log(carrinho)