const { Sequelize, Model } = require('sequelize');

class PassageiroViagem extends Model {
    static init(sequelize) {//VERIFICAR ALOCACAO DE ESPACO BD PARA DEFINIR LIMITES DE CARACTERES (TA SEM)
        super.init(
            {
                passageiroId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'passageiro',
                        key: 'id',
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                viagemId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'viagem_aviao',
                        key: 'id',
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                assento: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
            },
            {
                sequelize,
                modelName: 'passageiroviagem',
                freezeTableName: true
            }
        )
    }
}

module.exports = PassageiroViagem