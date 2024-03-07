'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('checkin', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

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

            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            }

        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('checkin');
    }
};
