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

drop table produtos;
drop table lojas;
drop table estoque;
drop table Clientes;
drop table Pedido;

create table produtos( 
id int primary key identity, 
preco decimal(13,2),
nome varchar(150),
marca varchar(150),
descricao varchar(150),
cor varchar(25),
idloja int,
foreign key (idloja) references lojas(id)
)
 
create table Clientes (
id int primary key identity, 
nome varchar(150),
CPF varchar(150),
nascimento date 
)
create table lojas (
id int primary key identity, 
idPedidos int, 
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
foreign key (idProduto) references produtos(id),
entrada datetime

)

create table Pedido ( 
 id int primary key identity,
 idcliente int foreign key references clientes(id),
 idproduto int foreign key references produtos(id)
) 
go


--controle de estoque

Create trigger ControleDeEstouqe
on Pedido
after insert,update as begin

if (exists(select * from inserted) || exists(select * from deleted))
	begin
		update Pedido 
		set 

	end; 
 

end;
go


EXEC sp_rename 'Clientes.nacimento', 'nascimento', 'COLUMN';