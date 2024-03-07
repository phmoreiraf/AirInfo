const { where, Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const avaliacao = require('../models/Avaliacao');

const sequelize = new Sequelize('airinfonew', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
  });

class avaliacaos {
    async index(req, res) {
        try {
            const nAvalicaos = await sequelize.query(
                'SELECT COUNT(id) as totalAvaliacao FROM avaliacao',
            );
            return res.status(200).json(nAvalicaos[0][0])
        } catch (erro) {
            return res.status(500).json('Erro ao pegar avaliacoes' + erro)
        }
    }
    async sum(req, res) {
        try {
            const nAvalicaos = await sequelize.query(
                'SELECT sum(avaliacao) as soma FROM avaliacao',
            );
            return res.status(200).json(nAvalicaos[0][0])
        } catch (erro) {
            return res.status(500).json('Erro ao pegar avaliacoes' + erro)
        }
    }
}


module.exports = new avaliacaos()
