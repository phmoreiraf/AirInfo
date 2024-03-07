const { where } = require('sequelize');
const checkins = require('../models/Checkin');
//const viagens = require('../models/ViagemAviao');

class checkinController {
    async create(req, res) {
        try {
            await checkins.create({
                //localizador: req.body.localizador,
                cpf: req.body.cpf,
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                id_passagem: req.body.id_passagem,
                //CheckRealizado: req.body.CheckRealizado
            })
            return res.status(200).json('Checkin realizado com sucesso!')
        } catch (erro) {
            return res.status(500).json('Checkin não realizado' + erro)
        }
    }

    async filterP(req, res){
        try{
            const {id_passagem} = req.query
            const checkinFil = await checkins.findOne({
                where: {
                    id_passagem : id_passagem
                }
            })
            console.log(checkinFil)
            return res.status(200).json(checkinFil)
        } catch(erro){
            return res.status(500).json('Erro ao pegar as viagens' + erro)
        }
    }

    //Buscar dados depois usando uma query com select with join apos o checkin ser feito
    /* async index(req, res){//e necessario?
        try {
            const viagensImport = await viagens.findAll()
            console.log(viagensImport)
            return res.status(200).json(viagensImport)
        } catch(erro){
            return res.status(500).json('Erro ao pegar dados da viagem/voo' + erro)
        }
    }*/

}

module.exports = new checkinController()
