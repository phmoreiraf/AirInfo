
const { Sequelize, Model } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {//VERIFICAR ALOCACAO DE ESPACO BD PARA DEFINIR LIMITES DE CARACTERES (TA SEM)
        super.init(
            {
                email: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                senha: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                userType: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
                    allowNull: false
                }

            },
            {
                sequelize,
                modelName: 'usuario',
                freezeTableName: true
            }
        )
    }
}

module.exports = Usuario