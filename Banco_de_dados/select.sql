-- Consultar os preços, tamanhos e suas quantidades de sabores de pizza.
SELECT 
	id, 
	quantidade_sabores,
	tamanho,
	preco_unitario
FROM pizzas;

-- Consultar os sabores e seus ingredientes.
SELECT
	id,
	nome,
	ingredientes
FROM sabores

-- Consultar os preços e sabores de bordas de pizza.
SELECT
	id,
	preco,
	sabor
FROM bordas;

-- Consultar as bebidas da pizzaria.
SELECT
	id,
	bebida,
	preco
FROM bebidas;

-- Consultar os usuários cadastrados no sistema.
SELECT
	*
FROM usuarios;

-- Consultar os endereços dos usuários cadastrados no sistema.
SELECT
	u.id,
	u.nome,
	u.telefone,
	u.email,
	e.cep,
	e.estado,
	e.cidade,
	e.bairro,
	e.rua,
	e.complemento,
	e.numero
FROM usuarios u
LEFT JOIN enderecos e
ON u.id = e.usuario_id

-- Consultar os dados dos pedidos
SELECT
	pe.id,
	u.nome,
	pe.entrega,
	pe.preco_total,
	pe.motoboy_id,
	mo.nome,
	pe_pi.pizza_id,
	pe_pi.pedido_id,
	pi.quantidade_sabores,
	pi.tamanho,
	pi_sa.pizza_id,
	pi_sa.sabor_id,
	s.nome,
	s.ingredientes,
	b.sabor,
	b.preco,
	pe_be.bebida_id,
	pe_be.pedido_id,
	be.bebida
FROM 
	pedidos pe
RIGHT JOIN
	usuarios u ON pe.usuario_id = u.id
INNER JOIN
	pedidos_pizzas pe_pi ON pe_pi.pedido_id = pe.id
INNER JOIN 
	pizzas pi ON pe_pi.pizza_id = pi.id
INNER JOIN
	bordas b ON pi.borda_id = b.id
INNER JOIN
	pizzas_sabores pi_sa ON pe_sa.pizza_id = pi.id
INNER JOIN
	sabores s ON pi_sa.sabor_id = s.id
INNER JOIN
	pedidos_bebidas pe_be ON pe_be.pedido_id = pe.id
INNER JOIN
	bebidas be ON pe_be.bebida_id = be.id
INNER JOIN
	motoboys mo ON pe.motoboy_id = mo.id
WHERE pe.id = 1;

-- Consultar um pedido específico
SELECT
	pe.id,
	u.nome,
	pe.entrega,
	pe.preco_total,
	pe.motoboy_id,
	mo.nome,
	pe_pi.pizza_id,
	pe_pi.pedido_id,
	pi.quantidade_sabores,
	pi.tamanho,
	pi_sa.pizza_id,
	pi_sa.sabor_id,
	s.nome,
	s.ingredientes,
	b.sabor,
	b.preco,
	pe_be.bebida_id,
	pe_be.pedido_id,
	be.bebida,
FROM 
	pedidos pe
INNER JOIN
	usuarios u ON pe.usuario_id = u.id
INNER JOIN
	pedidos_pizzas pe_pi ON pe_pi.pedido_id = pe.id
INNER JOIN 
	pizzas pi ON pe_pi.pizza_id = pi.id
INNER JOIN
	bordas b ON pi.borda_id = b.id
INNER JOIN
	pizzas_sabores pi_sa ON pi_sa.pizza_id = pi.id
INNER JOIN
	sabores s ON pi_sa.sabor_id = s.id
INNER JOIN
	pedidos_bebidas pe_be ON pe_be.pedido_id = pe.id
INNER JOIN
	bebidas be ON pe_be.bebida_id = be.id
INNER JOIN
	motoboys mo ON pe.motoboy_id = mo.id
WHERE pe.id = 1;


