// Inicializa o valor total
var valorTotal = 0;

// Função para limpar o carrinho
limpar();

// Função para adicionar um produto ao carrinho
function adicionar() {

    // Obtém o produto selecionado e seus detalhes
    var produto = document.getElementById('produto').value;
    var nomeProduto = produto.split('-')[0]; // Extrai o nome do produto
    var valorProduto = produto.split('R$')[1]; // Extrai o valor do produto
    var quantidade = document.getElementById('quantidade').value; // Obtém a quantidade
    var subTotal = valorProduto * quantidade; // Calcula o subtotal
    var carrinho = document.getElementById('lista-produtos'); // Obtém o elemento do carrinho

    // Adiciona o produto ao display do carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul"> ${quantidade} </span> ${nomeProduto} <span class="texto-azul">${subTotal}</span></section>`;

    // Atualiza o valor total
    valorTotal = valorTotal + subTotal;
    campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$ ${valorTotal}`;

    // Reseta o campo de quantidade para 1
    document.getElementById('quantidade').value = 1;

}

// Função para limpar o carrinho e resetar os valores
function limpar() {

    // Reseta o valor total
    valorTotal = 0;

    // Reseta o campo de quantidade para 1
    document.getElementById('quantidade').value = 1;

    // Limpa o display do carrinho
    document.getElementById('lista-produtos').innerHTML = '';

    // Define o display do valor total para 'R$ 0'
    document.getElementById('valor-total').textContent = 'R$ 0';

}
