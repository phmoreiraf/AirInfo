const { where, Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const bagagem = require('../models/Bagagem');

const sequelize = new Sequelize('airinfonew', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
  });

class bagagens {
    async index(req, res) {
        try {
            const nBagagens = await sequelize.query(
                'SELECT COUNT(id) as totalBagagens FROM bagagem',
            );
            return res.status(200).json(nBagagens[0][0])
        } catch (erro) {
            return res.status(500).json('Erro ao pegar bagagens ' + erro)
        }
    }
    async desp(req, res) {
        try {
            const nDespachadas = await sequelize.query(
                'SELECT count(id) as retiradas FROM bagagem where status="retirada"',
            );
            return res.status(200).json(nDespachadas[0][0])
        } catch (erro) {
            return res.status(500).json('Erro ao pegar avaliacoes' + erro)
        }
    }
}


module.exports = new bagagens()
