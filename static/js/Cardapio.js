$(document).ready(function() {
    // Função para lidar com o clique no botão de pedido
    $('.btn-pedido').click(function() {
        // Obtém o nome do item e o preço
        var itemName = $(this).closest('.card-body').find('.card-title').text();
        var itemPrice = $(this).closest('.card-body').find('.card-text strong').text();

        // Exibe uma mensagem simples
        alert('Pedido feito!\nItem: ' + itemName + '\nPreço: ' + itemPrice);
    });
});