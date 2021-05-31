var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Paleta = require('../models').Paleta;

router.get('/paletaCores', function(req, res, next) {
    console.log('Recuperando todos as paletas');

    let instrucaoSql = `select count(tb_paleta.idPaleta) as 'opcoes', tb_paleta.nome from tb_paleta inner join tb_usuario on tb_paleta.idPaleta = tb_usuario.fkPaleta group by tb_paleta.nome;`;

    sequelize.query(instrucaoSql, {
            model: Paleta,
            mapToModel: true
        })
        .then(resultado => {
            console.log(`Resultado: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});

module.exports = router;