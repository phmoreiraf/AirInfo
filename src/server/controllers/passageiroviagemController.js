const { where } = require('sequelize');
const passageiroviagem = require('../models/PassageiroViagem');

class passageiroviagemController {
    async create(req, res) {
        try {
            await passageiroviagem.create({
                passageiroId: req.body.passageiroId,
                viagemId: req.body.viagemId,
                assento: req.body.assento
            })
            return res.status(200).json('Passagem cadastrada com sucesso')
        } catch (erro) {
            return res.status(500).json('Passagem não cadastrada ' + erro)
        }
    }

    async index(req, res) {
        try {
            const passageiroviagemImport = await passageiroviagem.findAll()
            return res.status(200).json(passageiroviagemImport)
        } catch (erro) {
            return res.status(500).json('Erro ao pegar passageiros' + erro)
        }
    }

    async filter(req, res) {
        try {
            const {passageiroId} = req.query
            const passageiroviagemImport = await passageiroviagem.findAll({
                where : {
                    passageiroId : passageiroId
                }
            })
            return res.status(200).json(passageiroviagemImport)
        } catch (erro) {
            return res.status(500).json('Erro ao pegar passageiros' + erro)
        }
    }

    async update(req, res) {
        try {
            await passageiroviagem.update({
                passageiroId: req.body.passageiroId,
                viagemId: req.body.viagemId,
                assento: req.body.assento
            }, { where: { id: req.params.id } })
            return res.status(200).json('Sucesso ao atualizar')
        } catch (erro) {
            return res.status(500).json('Erro ao atualizar' + erro)
        }
    }

    async delete(req, res) {
        try {
            await passageiroviagem.destroy({
                where: { id: req.params.id }
            })
            return res.status(200).json('Sucesso ao deletar')
        } catch (erro) {
            return res.status(500).json('Erro ao deletar' + erro)
        }
    }


}

module.exports = new passageiroviagemController()