const { where } = require('sequelize');
const usuarios = require('../models/Usuario');
const { response } = require('express');



class usuariosController {
    async create(req, res) {
        try {
            await usuarios.create({
                email: req.body.email,
                senha: req.body.senha,
                userType: req.body.userType
            })
            return res.status(200).json('Usuario cadastrado com sucesso')
        } catch (erro) {
            return res.status(500).json('Usuario não cadastrado' + erro)
        }
    }

    async index(req, res) {//e necessario? dentro da pagine de perfil sim
        try {
            const usuariosImport = await usuarios.findAll()
            console.log(usuariosImport)
            return res.status(200).json(usuariosImport)
        } catch (erro) {
            return res.status(500).json('Erro ao pegar os usuarios' + erro)
        }
    }

    async filter(req, res) {
        try{
            const {id} = req.query
            const usuarioAtual = await usuarios.findOne({
                where: {
                    id : id
                }
            })
            console.log(usuarioAtual)
            return res.status(200).json(usuarioAtual)
        } catch(erro){
            return res.status(500).json('Erro ao pegar as viagens' + erro)
        }
    }

    async update(req, res) {
        try {
            await usuarios.update({
                id: req.body.id
            }, { where: { id: req.params.id } })
            return res.status(200).json('Sucesso ao atualizar')
        } catch (erro) {
            return res.status(500).json('Erro ao atualizar' + erro)
        }
    }

    async delete(req, res) {
        try {
            await usuarios.destroy({
                where: { id: req.params.id }
            })
            return res.status(200).json('Sucesso ao deletar')
        } catch (erro) {
            return res.status(500).json('Erro ao deletar' + erro)
        }
    }

    async login(req, res) {
        try {
            const { email, senha } = req.body
            const user = await usuarios.findOne({ where: { email } });

            if (!user) {
                return res.status(404).send('Usuário não encontrado');
            }

            if (senha !== user.senha) {
                return res.status(401).send('Credenciais inválidas');
            }


            

            return res.status(200).json(user);
        } catch (erro) {
            return res.status(500).json('Erro ao fazer login' + erro)
        }
    }

}

module.exports = new usuariosController()