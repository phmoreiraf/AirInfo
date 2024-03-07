const { where, Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const usuario = require('../models/Usuario');

const sequelize = new Sequelize('airinfonew', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
  });

class NovosUsuarios {
    async index(req, res) {
        try {
            const {dataInicial, dataFinal} = req.query
            const newUsers = await sequelize.query(
                'SELECT DISTINCT COUNT(id) as total FROM usuario WHERE createdAt between :dataInicial and :dataFinal',
                {
                    replacements: { dataInicial, dataFinal },
                    type: sequelize.QueryTypes.SELECT
                }
            );
            return res.status(200).json(newUsers[0])
        } catch (erro) {
            return res.status(500).json('Erro ao pegar passageiros' + erro)
        }
    }
}


module.exports = new NovosUsuarios()
