/*
Sistema de gestão financeira
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


create database Projetinho; 
go 
use Projetinho;
go

create table produtos( 
id int primary key identity, 
preco decimal(13,2),
nome varchar(150),
marca varchar(150),
descricao varchar(150),
cor varchar(25)
)
 
create table Clientes (
id int primary key identity, 
nome varchar(150),
CPF varchar(150),
nacimento date, 

)

create table lojas (
id int primary key identity, 
idEstoque int, 
FOREIGN KEY (idEstoque) references estoque(id), 
segmento varchar(150),
nome varchar(150), 
localidade varchar(150), 
nota decimal(2,2)

)

create table estoque (
id int primary key identity, 
idProduto int, 
idloja int, 
foreign key (idloja) references lojas(id), 
foreign key (idProduto) references produto(id),
entrada datetime

)

create table produto (
id int primary key identity, 
preco decimal(10,2), 
descricao varchar(250),
nome varchar(150)

)

create table Carrinho (
id int primary key identity, 
idCliente foreign key references cliente(id)

)

USE [Projetinho]
GO

INSERT INTO [dbo].[produtos]
           ([preco]
           ,[nome]
           ,[marca]
           ,[descricao]
           ,[cor])
     VALUES
           (10.00,
           'dentadura',
           'Marcia',
           'comum',
           'padrão')
GO

