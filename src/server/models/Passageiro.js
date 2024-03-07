const { Sequelize, Model } = require('sequelize');

class Passageiro extends Model {
    static init(sequelize) {//VERIFICAR ALOCACAO DE ESPACO BD PARA DEFINIR LIMITES DE CARACTERES (TA SEM)
        super.init(
            {
                nome: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                sobrenome: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                email: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                cpf: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                rg: {
                    type: Sequelize.STRING,
                    allowNull: true
                },

                data_nascimento: {
                    type: Sequelize.DATEONLY,
                    allowNull: true
                },

                telefone: {
                    type: Sequelize.STRING,
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
            },
            {
                sequelize,
                modelName: 'passageiro',
                freezeTableName: true
            }
        )
    }
}

module.exports = Passageiro