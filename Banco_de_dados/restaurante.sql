-- CREATE DATABASE streaming

CREATE TABLE IF NOT EXISTS public.enderecos(
	id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL,
    rua VARCHAR (256) NOT NULL,
    numero VARCHAR(256) NOT NULL,
    complemento VARCHAR(256),
    bairro VARCHAR(256) NOT NULL,
    cidade VARCHAR(256) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    estado VARCHAR(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    data_nascimento date NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    rg VARCHAR(20) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR (256) UNIQUE,
    senha VARCHAR(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.pedidos(
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    entrega VARCHAR NOT NULL,
    preco_total MONEY NOT NULL,
    motoboy_id INT
);

CREATE TABLE IF NOT EXISTS public.motoboys(
    id serial PRIMARY KEY,
    nome VARCHAR(256) NOT NULL,
    cpf VARCHAR (11) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.bebidas(
    id SERIAL PRIMARY KEY,
    bebida VARCHAR (256) NOT NULL,
    preco MONEY NOT NULL
);


CREATE TABLE IF NOT EXISTS public.pedidos_bebidas(
    bebida_id INT,
    pedido_id INT,
    quantidade SMALLINT NOT NULL,
    preco MONEY NOT NULL,
    PRIMARY KEY (bebida_id, pedido_id)
);

CREATE TABLE IF NOT EXISTS public.pedidos_pizzas(
    pizza_id INT,
    pedido_id INT,
    preco MONEY NOT NULL,
    PRIMARY KEY (pizza_id, pedido_id)
);

CREATE TABLE IF NOT EXISTS public.pizzas(
    id SERIAL PRIMARY KEY,
    quantidade_sabores SMALLINT NOT NULL,
    tamanho VARCHAR (256) NOT NULL,
    preco_unitario MONEY NOT NULL,
    borda_id INT
);

CREATE TABLE IF NOT EXISTS public.bordas(
    id SERIAL PRIMARY KEY,
    sabor VARCHAR(256) NOT NULL,
    preco MONEY NOT NULL
);

CREATE TABLE IF NOT EXISTS public.pizzas_sabores(
    pizza_id INT,
    sabor_id INT,
    PRIMARY KEY (pizza_id, sabor_id)
);

CREATE TABLE IF NOT EXISTS public.sabores(
    id SERIAL PRIMARY KEY,
    nome VARCHAR (256) NOT NULL,
    ingredientes VARCHAR (256) NOT NULL
);

ALTER TABLE IF EXISTS public.enderecos
ADD FOREIGN KEY (usuario_id)
REFERENCES public.usuarios (id)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.pedidos
ADD FOREIGN KEY (usuario_id)
REFERENCES public.usuarios(id)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.pedidos
ADD FOREIGN KEY (motoboy_id)
REFERENCES public.motoboys(id)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.pedidos_bebidas
ADD FOREIGN KEY (bebida_id)
REFERENCES public.bebidas(id)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.pedidos_bebidas
ADD FOREIGN KEY (pedido_id)
REFERENCES public.pedidos(id)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.pedidos_pizzas
ADD FOREIGN KEY (pedido_id)
REFERENCES public.pedidos(id)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.pedidos_pizzas
ADD FOREIGN KEY (pizza_id)
REFERENCES public.pizzas(id)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.pizzas
ADD FOREIGN KEY (borda_id)
REFERENCES public.bordas(id)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.pizzas_sabores
ADD FOREIGN KEY (pizza_id)
REFERENCES public.pizzas(id)
ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.pizzas_sabores
ADD FOREIGN KEY (sabor_id)
REFERENCES public.sabores(id)
ON UPDATE CASCADE
ON DELETE CASCADE;
