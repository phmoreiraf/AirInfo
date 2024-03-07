const { Sequelize, Model } = require('sequelize');

class Avaliacao extends Model {
    static init(sequelize) { 
        super.init({
          
            avaliacao: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            idUsuario: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'usuario',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },

        }, {
            sequelize,
            modelName: 'avaliacao',
            freezeTableName: true
        })
    }
}

module.exports = Avaliacao
