const { where } = require('sequelize');
const avaliacao = require('../models/Avaliacao');

class avaliacaoController {
    async create(req, res) {
        try {
            await avaliacao.create({
                idUsuario: req.body.idUsuario,
                avaliacao: req.body.avaliacao,
            })
            return res.status(200).json('Avaliacao Realizada')
        } catch(erro){
            return res.status(500).json('Avaliacao não realizada ' + erro)
        }
    }

    async index(req, res){
        try {
            const avaliacaoImport = await avaliacao.findAll()
            return res.status(200).json(avaliacaoImport)
        } catch(erro){
            return res.status(500).json('Erro ao carregar as avaliacoes' + erro)
        }
    }   
}

module.exports = new avaliacaoController()
