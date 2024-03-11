function adicionar() {

    var produto = document.getElementById('produto').value;
    var nomeProduto = produto.split('-')[0];
    var valorProduto = produto.split('R$')[1];
    var quantidade = document.getElementById('quantidade').value;
    var subTotal = valorProduto * quantidade;
    var carrinho = document.getElementById('lista-produtos');
    var total = document.getElementById('valorTotal');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul"> ${quantidade} </span> ${nomeProduto} <span class="texto-azul">${subTotal}</span></section>`
}

function limpar() {

}