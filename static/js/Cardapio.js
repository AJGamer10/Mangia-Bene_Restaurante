$(document).ready(function() {
    // Variável para rastrear o total dos pedidos
    var totalPedido = 0;

    $('.btn-pedido').click(function() {
        var itemName = $(this).closest('.card-body').find('.card-title').text();
        var itemPrice = parseFloat($(this).closest('.card-body').find('.card-text strong').text().replace('R$ ', ''));

        // Adiciona o item pedido à área de pedidos
        $('#pedidos').append('<div class="pedido-item"><strong>' + itemName + '</strong> - R$ ' + itemPrice.toFixed(2) + '</div>');

        // Atualiza o total dos pedidos
        totalPedido += itemPrice;
        $('#total').text('Total: R$ ' + totalPedido.toFixed(2));
    });

    // Função para abrir o modal de personalização ao clicar no ícone de "+"
    $('.btn-personalizar').click(function() {
        $('#personalizarModal').modal('show');
    });

    // Função para confirmar a personalização e fechar o modal
    $('#confirmarPersonalizacao').click(function() {
        // Adicione aqui a lógica para confirmar a personalização
        $('#personalizarModal').modal('hide');
    });

    // Lista de ingredientes padrão
    var ingredientesPadrao = {
        'Margherita': ['Molho de tomate', 'Mozzarella fresca', 'Manjericão', 'Azeite de oliva'],
        'Vinho Tinto': ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3']
        // Adicione mais pizzas ou bebidas conforme necessário
    };

    // Lista de ingredientes padrão
    var ingredientesPadrao = {
        'Margherita': ['Molho de tomate', 'Mozzarella fresca', 'Manjericão', 'Azeite de oliva'],
        'Vinho Tinto': ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3']
        // Adicione mais pizzas ou bebidas conforme necessário
    };

    // Lista de ingredientes padrão
    var ingredientesPadrao = {
        'Margherita': ['Molho de tomate', 'Mozzarella fresca', 'Manjericão', 'Azeite de oliva'],
        'Vinho Tinto': ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3']
        // Adicione mais pizzas ou bebidas conforme necessário
    };

    // Lista de pedidos
    var pedidos = [];

    // Preenche a lista de ingredientes no modal
    var listaIngredientes = document.getElementById('lista-ingredientes');
    var btnRemoverIngrediente = document.getElementById('btn-remover-ingrediente');
    var btnAdicionarIngrediente = document.getElementById('btn-adicionar-ingrediente');
    var inputIngrediente = document.getElementById('input-ingrediente');

    // Função para carregar ingredientes no modal
    function carregarIngredientes(item) {
        listaIngredientes.innerHTML = '';
        ingredientesPadrao[item].forEach(function (ingrediente) {
            var li = document.createElement('li');
            li.textContent = ingrediente;
            listaIngredientes.appendChild(li);
        });
    }

    // Ação do botão Personalizar
    $('.btn-personalizar').on('click', function () {
        var item = $(this).data('pizza') || $(this).data('bebida');
        carregarIngredientes(item);
    });

    // Ação do botão Adicionar Ingrediente
    btnAdicionarIngrediente.addEventListener('click', function () {
        var novoIngrediente = inputIngrediente.value.trim();
        if (novoIngrediente !== '') {
            var li = document.createElement('li');
            li.textContent = novoIngrediente;
            listaIngredientes.appendChild(li);
            inputIngrediente.value = '';
        }
    });

    // Ação do botão Remover Ingrediente
    btnRemoverIngrediente.addEventListener('click', function () {
        var ultimaLi = listaIngredientes.lastElementChild;
        if (ultimaLi) {
            listaIngredientes.removeChild(ultimaLi);
        }
    });

    // Ação do botão Confirmar Personalização
    $('#confirmarPersonalizacao').on('click', function () {
        var item = $('.modal-title').text();
        var ingredientes = [];
        $('#lista-ingredientes li').each(function () {
            ingredientes.push($(this).text());
        });
        adicionarPedido(item, ingredientes);
        $('#personalizarModal').modal('hide');
    });

    // Ação do botão Fazer Pedido
    $('.btn-pedido').on('click', function () {
        var item = $(this).closest('.card-body').find('.card-title').text();
        adicionarPedido(item);
    });

    // Função para adicionar pedido à lista de pedidos
    function adicionarPedido(item, ingredientes = []) {
        var pedido = {
            item: item,
            ingredientes: ingredientes
        };
        pedidos.push(pedido);
        exibirPedidos();
        calcularTotal();
    }

    // Função para exibir os pedidos na área de pedidos
    function exibirPedidos() {
        var pedidosHtml = '';
        pedidos.forEach(function (pedido, index) {
            pedidosHtml += '<div class="pedido-item">';
            pedidosHtml += '<strong>' + pedido.item + '</strong>';
            if (pedido.ingredientes.length > 0) {
                pedidosHtml += ' - Ingredientes: ' + pedido.ingredientes.join(', ');
            }
            pedidosHtml += '</div>';
        });
        $('#pedidos').html(pedidosHtml);
    }

    // Função para calcular o total dos pedidos
    function calcularTotal() {
        var total = 0;
        pedidos.forEach(function (pedido) {
            // Adicione lógica para calcular o valor de cada item (item.valor) aqui
            total += 10; // Exemplo de valor fixo
        });
        $('#total').text('Total: R$ ' + total.toFixed(2));
    }
});