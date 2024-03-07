'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('bagagem', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

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
        await queryInterface.dropTable('bagagem');
    }
};