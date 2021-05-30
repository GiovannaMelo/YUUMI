CREATE DATABASE ac3giovanna;

USE ac3giovanna;

CREATE TABLE tb_usuario (
	idUsuario int primary key auto_increment,
    nome varchar (80),
    sobrenome varchar (80),
    email varchar (90),
    senha varchar (20),
    sexo char (1),
    subtom varchar (30),
    coloracao varchar (50),
    comportamentoPele varchar (30),
    cabelo varchar (20),
    olhos varchar (20) 
);

CREATE TABLE tb_publicacoes (
	idPublicacoes int primary key auto_increment,
    titulo varchar (80),
    descricao varchar (200),
    fkUsuario int,
    foreign key (fkUsuario) references tb_usuario(idUsuario)
);

CREATE TABLE tb_cartelaCores (
	idCartelaCores int primary key auto_increment,
    cores varchar (40)
);

CREATE TABLE tb_paleta (
	idPaleta int primary key auto_increment,
    nome varchar (40),
    subtom varchar (40),
    fkUsuario int,
    foreign key (fkUsuario) references tb_usuario(idUsuario),
    fkCartelaCores int,
    foreign key (fkCartelaCores) references tb_cartelaCores(idCartelaCores)
);

INSERT INTO tb_usuario (nome, sobrenome, email, senha, sexo, subtom, coloracao, comportamentoPele, cabelo, olhos) VALUES 
	('Vivian', 'Silva', 'vivian.silva@gmail.com', 'urubu100', 'F', 'Quente', 'Esverdeadas', 'Bronzeada', 'Castanho Escuro', 'Castanho Claro'),
    ('Gustavo', 'Manocchio', 'gustavo.manocchio@hotmail.com', 'manocchio1234', 'M', 'Frio','Ambos', 'Queimado', 'Preto', 'Castanho Escuro'),
    ('Fabiane', 'Cruz', 'cruz.fabiane@gmail.com', 'cruzfabi', 'F','Neutro' ,'Ambas', 'Ambas', 'Ruivo', 'Verde'),
    ('Abner', 'Lucas', 'abner@gmail.com.br', 'lucas2021', 'M', 'Quente', 'Esverdeadas', 'Ambos', 'Castanho Escuro', 'Azul');
    
INSERT INTO tb_publicacoes (titulo, descricao, fkUsuario) VALUES
	('DESCOBRINDO MINHA PALETA DE CORES', 'Oie pessoal, hoje descobri minha paleta de cores e mds, nem imaginei que fosse primavera intensa', 1),
    ('MINHA COLORAÇÃO PESSOAL', 'Iae galera, hoje descibri minha coloração pessoal, fiquei muito feliz em saber que sou Inverno suave, acho bacana essas cores', 2),
    ('O QUE VOCÊS ACHARAM DA PALETA DE VOCÊS???', 'Oi Gente, acabei de descobrir minha paleta de cores e adorei, oq vocês acharam da de vocês???', 3),
    ('EU NÃO GOSTOS DAS CORES DA MINHA PALETA O QUE EU FAÇO?', 'Me ajudem por favor, descobri minha paleta mas não gosto das cores, apesar de saber que me favorecem, o que eu faço?',  4),
    ('Oie Abner', 'Tenta usar essas cores em casa e ir se acostumando com elas, com o tempo você vai passar a gostar', 3);
    
INSERT INTO tb_cartelaCores (cores) VALUES 
	('Rosa claro'),
    ('Laranja claro'),
    ('Amarelo claro'),
    ('Vermelho intenso'),
    ('Laranja intenso'),
    ('Rosa intenso'),
    ('Verde claro'),
    ('Lilás'),
    ('Verde água'),
    ('Roxo'),
    ('Verde escuro'),
    ('Verde Musgo'),
    ('Azul claro'),
    ('Azul Escuro'),
    ('Preto'),
    ('Cinza escuro'),
    ('Pink'),
    ('Vinho'),
    ('Amarelo Mostarda');
    
    INSERT INTO tb_paleta (nome, subtom, fkUsuario, fkCartelaCores) VALUES 
	('Primavera Suave', 'Quente', 4, 1),
	('Primavera Suave', 'Quente', 4, 2),
	('Primavera Suave', 'Quente', 4, 3),
    ('Primavera Intensa', 'Quente', 1, 4),
	('Primavera Intensa', 'Quente', 1, 5),
	('Primavera Intensa', 'Quente', 1, 6),
    ('Outono Intenso', 'Frio', 3, 10),
    ('Outono Intenso', 'Frio', 3, 11),
    ('Outono Intenso', 'Frio', 3, 12),
    ('Inverno Suave', 'Frio', 2, 13),
	('Inverno Suave', 'Frio', 2, 14),
	('Inverno Suave', 'Frio', 2, 15);
    
    SELECT * FROM tb_publicacoes;
    
    SELECT tb_usuario.nome as Nome, tb_publicacoes.titulo as Título, tb_publicacoes.descricao as Post FROM tb_usuario 
		INNER JOIN tb_publicacoes ON idUsuario = fkUsuario;
    
    SELECT DISTINCT  tb_usuario.nome as Nome, tb_usuario.subtom as Subtom, tb_paleta.nome as 'Paleta de cores' FROM tb_usuario 
		INNER JOIN tb_paleta ON idUsuario = fkUsuario 
			WHERE tb_usuario.subtom = 'QUENTE';
            
    SELECT DISTINCT  tb_usuario.nome as Nome, tb_usuario.subtom as Subtom, tb_paleta.nome as 'Paleta de cores', tb_cartelaCores.cores FROM tb_usuario 
		LEFT JOIN tb_paleta ON idUsuario = fkUsuario 
        LEFT JOIN tb_cartelaCores on idCartelaCores = fkCartelaCores;
        
	SELECT DISTINCT  tb_usuario.nome as Nome, tb_usuario.subtom as Subtom, tb_paleta.nome as 'Paleta de cores' FROM tb_usuario 
		INNER JOIN tb_paleta ON idUsuario = fkUsuario;
        
	SELECT tb_paleta.nome, tb_paleta.subtom, count(tb_cartelaCores.cores)as cores FROM tb_paleta INNER JOIN tb_cartelaCores ON idCartelaCores = fkCartelaCores;