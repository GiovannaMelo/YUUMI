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
    olhos int,
    fkPaleta int,
    foreign key (fkPaleta) references tb_paleta(idPaleta)
);
DROP TABLE tb_usuario;
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

SELECT 
    tb_usuario.nome,
    descricao, datapublicacao
    FROM tb_publicacao
    INNER JOIN tb_usuario
    ON tb_publicacao.fkUsuario = tb_usuario.id
    ORDER BY tb_publicacao.id DESC; 
SELECT 
    tb_usuario.nome,
    descricao
    FROM tb_publicacao
    INNER JOIN tb_usuario
    ON tb_publicacao.fkUsuario = tb_usuario.id
    ORDER BY tb_publicacao.id DESC;
select * from tb_publicacao;
select * from tb_usuario;
DROP TABLE tb_publicacao;

select count(subtom) as qtd_sim  from tb_usuario 
	WHERE subtom = 1
	group by subtom;

select count(subtom), subtom as NÃO from tb_usuario 
	WHERE subtom = 2
	group by subtom;