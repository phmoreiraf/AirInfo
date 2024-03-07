const { where } = require('sequelize');
const bagagem = require('../models/Bagagem');

class bagagemController {
    async create(req, res) {
        try {
            await bagagem.create({
                status: req.body.status,
                id_passagem: req.body.id_passagem,
            })
            return res.status(200).json('Status Atualizado')
        } catch(erro){
            return res.status(500).json('Bagagem não atualizada ' + erro)
        }
    }

    async filter(req, res){
        try{
            const {status, id_passagem} = req.query
            const bagagemFil = await bagagem.findAll({
                where: {
                    id_passagem: id_passagem,
                }
            })
            console.log(bagagemFil)
            return res.status(200).json(bagagemFil)
        } catch(erro){
            return res.status(500).json('Erro ao pegar as bagagens' + erro)
        }
    }

    async index(req, res){
        try {
            const bagagensImport = await bagagem.findAll()
            return res.status(200).json(bagagensImport)
        } catch(erro){
            return res.status(500).json('Erro ao pegar as bagagens' + erro)
        }
    }

    async update(req, res){
        try {
            await bagagem.update({
                    status: req.body.status,
            }, {where: {id: req.params.id}})
            return res.status(200).json('Sucesso ao atualizar o status da bagagem')
        } catch(erro){
            return res.status(500).json('Erro ao atualizar' + erro)
        }
    }
    
    async delete(req, res){
        try {
            await bagagem.destroy({
                where: {id: req.params.id}
            })
            return res.status(200).json('Sucesso ao deletar')
        } catch(erro){
            return res.status(500).json('Erro ao deletar' + erro)
        }
    }

    
}

module.exports = new bagagemController()
