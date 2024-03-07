const { Sequelize, Model } = require('sequelize');

class ViagemAviao extends Model {
    static init(sequelize) {//VERIFICAR ALOCACAO DE ESPACO BD PARA DEFINIR LIMITES DE CARACTERES (TA SEM)
        super.init(
            {

                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },

                numero_aviao: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    primaryKey: true
                },

                local_embarque: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                local_desembarque: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                data_partida: {
                    type: Sequelize.DATEONLY,
                    allowNull: true
                },

                data_chegada: {
                    type: Sequelize.DATEONLY,
                    allowNull: true
                },

                total_assentos: {
                    type: Sequelize.INTEGER,
                    allowNull: true
                },

                empresa_aerea: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                codigo_portao: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                modelo_aeronave: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                valor: {
                    type: Sequelize.INTEGER,
                    allowNull: true
                },

                hora_partida: {
                    type: Sequelize.TIME,
                    allowNull: true
                },

                hora_chegada: {
                    type: Sequelize.TIME,
                    allowNull: true
                },
            },
            
            {
                sequelize,
                modelName: 'viagem_aviao',
                freezeTableName: true
            }
        )
    }
}

module.exports = ViagemAviao