const { Sequelize, Model } = require('sequelize');

class Checkin extends Model {
    static init(sequelize) { 
        super.init({
            /*localizador: {
                type: Sequelize.STRING,
                allowNull: true
            },*/
            cpf: {
                type: Sequelize.STRING,
                allowNull: true
            },

            nome: {
                type: Sequelize.STRING,
                allowNull: true
            },
            sobrenome: {
                type: Sequelize.STRING,
                allowNull: true
            },

            id_passagem: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'passageiroviagem',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'checkin',
            freezeTableName: true
        })
    }
}

module.exports = Checkin
