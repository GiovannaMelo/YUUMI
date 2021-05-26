CREATE DATABASE bd_Yuumi;
use bd_yuumi;
CREATE TABLE tb_usuario(
	id int primary key auto_increment,
    nome varchar (45),
    sobrenome varchar (45),
    email varchar (80),
    login varchar (80),
    senha varchar (20),
    sexo int,
    subtom int,
    comportamentoPele int,
    coloracao int,
    cabelo int,
    olhos int
);

CREATE TABLE  tb_publicacao (
	id int primary key auto_increment,
    descricao varchar (200),
    fkUsuario int,
    foreign key (fkUsuario) references tb_usuario(id)
);

select * from tb_publicacao;

DROP TABLE tb_usuario;