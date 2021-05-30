'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Paleta = sequelize.define('Paleta', {
        idPaleta: {
            field: 'idPaleta',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            field: 'nome',
            type: DataTypes.STRING,
            allowNull: false
        },
        subtom: {
            field: 'subtom',
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        tableName: 'tb_paleta',
        freezeTableName: true,
        underscored: true,
        timestamps: false,
    });

    return Paleta;
};