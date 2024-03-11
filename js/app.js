var valorTotal = 0;
limpar();

function adicionar() {

    var produto = document.getElementById('produto').value;
    var nomeProduto = produto.split('-')[0];
    var valorProduto = produto.split('R$')[1];
    var quantidade = document.getElementById('quantidade').value;
    var subTotal = valorProduto * quantidade;
    var carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul"> ${quantidade} </span> ${nomeProduto} <span class="texto-azul">${subTotal}</span></section>`
    valorTotal = valorTotal + subTotal;
    campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${valorTotal}`;

    document.getElementById('quantidade').value = 1;

}

function limpar() {

    valorTotal = 0;

    document.getElementById('quantidade').value = 1;

    document.getElementById('lista-produtos').innerHTML = '';

    document.getElementById('valor-total').textContent = 'R$ 0';

}