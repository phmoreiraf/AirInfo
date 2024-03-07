const { where } = require('sequelize');
const viagens = require('../models/ViagemAviao');

class viagensController {
    async create(req, res) {
        try {
            await viagens.create({
                numero_aviao: req.body.numero_aviao,
                local_embarque: req.body.local_embarque,
                local_desembarque: req.body.local_desembarque,
                data_partida: req.body.data_partida,
                data_chegada: req.body.data_chegada,
                total_assentos: req.body.total_assentos,
                empresa_aerea: req.body.empresa_aerea,
                modelo_aeronave: req.body.modelo_aeronave,
                valor: req.body.valor,
                hora_partida: req.body.hora_partida,
                hora_chegada: req.body.hora_chegada,
            })
            return res.status(200).json('Viagem cadastrada com sucesso')
        } catch(erro){
            return res.status(500).json('Viagem não cadastrada ' + erro)
        }
    }

    async filter(req, res){
        try{
            const {local_embarque, local_desembarque, data_partida} = req.query
            const viagensFil = await viagens.findAll({
                where: {
                    local_embarque: local_embarque,
                    local_desembarque: local_desembarque,
                    data_partida: data_partida,
                }
            })
            console.log(viagensFil)
            return res.status(200).json(viagensFil)
        } catch(erro){
            return res.status(500).json('Erro ao pegar as viagens' + erro)
        }
    }

    async filterId(req, res){
        try{
            const {id} = req.query
            const viagensFil = await viagens.findOne({
                where: {
                    id : id
                }
            })
            console.log(viagensFil)
            return res.status(200).json(viagensFil)
        } catch(erro){
            return res.status(500).json('Erro ao pegar as viagens' + erro)
        }
    }

    async index(req, res){
        try {
            const viagensImport = await viagens.findAll()
            return res.status(200).json(viagensImport)
        } catch(erro){
            return res.status(500).json('Erro ao pegar as viagens' + erro)
        }
    }

    async update(req, res){
        try {
            await viagens.update({
                codigo_portao: req.body.codigo_portao,
                hora_partida: req.body.hora_partida,
                hora_chegada: req.body.hora_chegada,
            }, {where: {id: req.params.id}})
            return res.status(200).json('Sucesso ao atualizar')
        } catch(erro){
            return res.status(500).json('Erro ao atualizar' + erro)
        }
    }
    
    async delete(req, res){
        try {
            await viagens.destroy({
                where: {id: req.params.id}
            })
            return res.status(200).json('Sucesso ao deletar')
        } catch(erro){
            return res.status(500).json('Erro ao deletar' + erro)
        }
    }

    
}

module.exports = new viagensController()