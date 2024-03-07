const { where, Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const passageiroviagem = require('../models/PassageiroViagem');
const viagens = require('../models/ViagemAviao');
const check = require('../models/Checkin');

const sequelize = new Sequelize('airinfonew', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
  });

class Ocupacao {
    async ocup(req, res) {
        try {
            const passageiroviagemImport = await passageiroviagem.findAll({
                attributes: ['viagemId', [sequelize.fn('COUNT', sequelize.col('viagemId')), 'passageiroCount']],
                group: ['viagemId']
              })
            return res.status(200).json(passageiroviagemImport)
        } catch (erro) {
            return res.status(500).json('Erro ao pegar passageiros' + erro)
        }
    }

    async check(req, res) {
        try {
            const info = await sequelize.query(`
            SELECT
              COUNT(DISTINCT Checkin.id) AS totalCheckin,
              COUNT(DISTINCT PassageiroViagem.id) AS totalPassageiroViagem
            FROM
              Checkin,
              PassageiroViagem
          `)
            return res.status(200).json(info)
        } catch (erro) {
            return res.status(500).json('Erro ao pegar passageiros' + erro)
        }
    }
}


module.exports = new Ocupacao()
