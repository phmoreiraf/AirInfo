const { where } = require('sequelize');
const passageiros = require('../models/Passageiro');

class passageirosController {
    async create(req, res) {
        try {
            await passageiros.create({
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                cpf: req.body.cpf,
                rg: req.body.rg,
                email: req.body.email,
                data_nascimento: req.body.data_nascimento,
                telefone: req.body.telefone,
                idUsuario: req.body.idUsuario
            })
            return res.status(200).json('Passageiro cadastrado com sucesso')
        } catch (erro) {
            return res.status(500).json('Passageiro não cadastrado ' + erro)
        }
    }

    async index(req, res) {
        try {
            const passageirosImport = await passageiros.findAll()
            console.log(passageirosImport)
            return res.status(200).json(passageirosImport)
        } catch (erro) {
            return res.status(500).json('Erro ao pegar passageiros' + erro)
        }
    }

    async filter(req, res){
        try{
            const {idUsuario} = req.query
            const passageiroFil = await passageiros.findAll({
                where: {
                    idUsuario : idUsuario
                }
            })
            console.log(passageiroFil)
            return res.status(200).json(passageiroFil)
        } catch(erro){
            return res.status(500).json('Erro ao pegar as viagens' + erro)
        }
    }

    async update(req, res) {
        try {
            await passageiros.update({
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                cpf: req.body.cpf,
                rg: req.body.rg,
                email: req.body.email,
                data_nascimento: req.body.data_nascimento,
                telefone: req.body.telefone
            }, { where: { id: req.params.id } })
            return res.status(200).json('Sucesso ao atualizar')
        } catch (erro) {
            return res.status(500).json('Erro ao atualizar' + erro)
        }
    }

    async delete(req, res) {
        try {
            await passageiros.destroy({
                where: { id: req.params.id }
            })
            return res.status(200).json('Sucesso ao deletar')
        } catch (erro) {
            return res.status(500).json('Erro ao deletar' + erro)
        }
    }


}

module.exports = new passageirosController()