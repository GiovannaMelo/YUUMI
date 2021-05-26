	'use strict';

	/* 
	lista e explicação dos Datatypes:
	https://codewithhugo.com/sequelize-data-types-a-practical-guide/
	*/

	module.exports = (sequelize, DataTypes) => {
	    let Usuario = sequelize.define('Usuario', {
	        id: {
	            field: 'id',
	            type: DataTypes.INTEGER,
	            primaryKey: true,
	            autoIncrement: true
	        },
	        nome: {
	            field: 'nome',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        sobrenome: {
	            field: 'sobrenome',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        email: {
	            field: 'email',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        login: {
	            field: 'login',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        senha: {
	            field: 'senha',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        sexo: {
	            field: 'sexo',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        subtom: {
	            field: 'subtom',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        comportamentoPele: {
	            field: 'comportamentoPele',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        coloracao: {
	            field: 'coloracao',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        cabelo: {
	            field: 'cabelo',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        olhos: {
	            field: 'olhos',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	    }, {
	        tableName: 'tb_usuario',
	        freezeTableName: true,
	        underscored: true,
	        timestamps: false,
	    });

	    return Usuario;
	};