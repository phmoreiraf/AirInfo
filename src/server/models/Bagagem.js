const { Sequelize, Model } = require('sequelize');

class Bagagem extends Model {
    static init(sequelize) {
        super.init({

            status: {
                type: Sequelize.STRING,
                allowNull: true
            },

            id_passagem: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'PassageiroViagem',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            modelName: 'bagagem',
            freezeTableName: true
        })
    }
}

module.exports = Bagagem