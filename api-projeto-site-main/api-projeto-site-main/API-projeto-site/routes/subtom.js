var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */

router.get('/', function(req, res, next) {
    console.log('Recuperando todos os subtons');

    let instrucaoSql = `select subtom from tb_usuario;`;

    sequelize.query(instrucaoSql, {
            model: Usuario,
            mapToModel: true
        })
        .then(resultado => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});

router.get('/analiseSubtom', function(req, res, next) {
    console.log('Recuperando todos as escolhas dos usuários para cada subtom de pele');

    let instrucaoSql = `select count(subtom) as qtd_sim from tb_usuario WHERE subtom = 1 group by subtom;`;

    let votos = {
        sim: null,
        nao: null
    }
    sequelize.query(instrucaoSql, {
            model: Usuario,
            mapToModel: true
        })
        .then(resultado => {
            // votos.sim = resultado.qtd_sim
            let instrucaoNao = `select count(subtom) as qtd_nao from tb_usuario WHERE subtom = 2 group by subtom;`;
            // console.log(`Encontrados: ${resultado.length}`);
            votos.sim = resultado[0].qtd_sim;
            sequelize.query(instrucaoNao, {
                    model: Usuario,
                    mapToModel: true
                })
                .then(resultado => {
                    votos.nao = resultado[0].qtd_nao;
                    res.json(votos);

                }).catch(erro => {
                    console.error(erro);
                    res.status(500).send(erro.message);
                });
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });


});



module.exports = router;