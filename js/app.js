function adicionar() {

    var produto = document.getElementById('produto').value;
    var nomeProduto = produto.split('-')[0];
    var valorProduto = produto.split('R$')[1];
    var quantidade = document.getElementById('quantidade').value;
    var subTotal = valorProduto * quantidade;
    var carrinho = document.getElementById('listaCarrinho');
    var total = document.getElementById('valorTotal');

}

function limpar() {

}