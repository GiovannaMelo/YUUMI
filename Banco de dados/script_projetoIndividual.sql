CREATE DATABASE bd_Yuumi;

USE bd_yuumi;

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
    olhos int,
    fkPaleta int,
    foreign key (fkPaleta) references tb_paleta(idPaleta)
);

CREATE TABLE  tb_publicacao (
	id int primary key auto_increment,
    descricao varchar (200),
    dataPublicacao datetime default current_timestamp,
    fkUsuario int,
    foreign key (fkUsuario) references tb_usuario(id)
);

CREATE TABLE tb_paleta (
	idPaleta int primary key auto_increment,
    nome varchar (40),
    subtom varchar (40)
);

INSERT INTO tb_paleta VALUES 
	(null, 'Verão', 'Quente'),
    (null, 'Primavera', 'Quente'),
    (null, 'Outono', 'Frio'),
    (null, 'Inverno', 'Frio');

SELECT tb_usuario.nome, descricao, datapublicacao FROM tb_publicacao INNER JOIN tb_usuario
    ON tb_publicacao.fkUsuario = tb_usuario.id ORDER BY tb_publicacao.id DESC;
    
SELECT  tb_usuario.nome, descricao FROM tb_publicacao INNER JOIN tb_usuario
    ON tb_publicacao.fkUsuario = tb_usuario.id ORDER BY tb_publicacao.id DESC;
    
SELECT * FROM tb_paleta;
SELECT * FROM tb_usuario;

DELETE FROM tb_usuario WHERE id = 3;

select count(tb_paleta.idPaleta) as 'opcoes', tb_paleta.nome from tb_paleta inner join tb_usuario on tb_paleta.idPaleta = tb_usuario.fkPaleta
	group by tb_paleta.nome;

SELECT count(subtom) as qtd_sim  FROM tb_usuario WHERE subtom = 1
	GROUP BY subtom;

SELECT count(subtom) as qtd_nao  FROM tb_usuario WHERE subtom = 2
	GROUP BY subtom;