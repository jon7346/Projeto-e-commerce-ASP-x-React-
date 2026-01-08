/*
Sistema de e-commercie 
Backend em c# 
front-end em react 
banco em SQL 

tarefas: 

Definir entidades no banco de dados:
produtos: 
lojas: 
clientes: 
estoque: 
carrinho: 
itens do carrinho: 
endere�o: 


construir a logica/fluxo de utliza��o do aplicativo 
criar os controllers e classes 
desenvolver a rest api ou as api 
por fim o frontend em react 



*/


create database e_commercie; 
go 
use e_commercie;
go

create table produtos( 
id int primary key, 
preco decimal(13,2),
nome varchar(150),
marca varchar(150),
descricao varchar(150),
cor varchar(25),
)

create table lojas (
id int primary key, 
idEstoque int, 
FOREIGN KEY (idEstoque) references estoque(id), 
segmento varchar(150),
nome varchar(150), 
localidade varchar(150), 
nota decimal(2,2)

)

create table estoque (
id int primary key, 
idProduto int, 
idloja int, 
foreign key (idloja) references lojas(id)      )


create table produto (
id 

)