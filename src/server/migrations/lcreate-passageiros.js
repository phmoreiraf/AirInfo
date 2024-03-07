'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('passageiro', {

            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

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
                type: Sequelize.INTEGER,
                allowNull: true
            },

            rg: {
                type: Sequelize.STRING,
                allowNull: true
            },

            data_nascimento: {
                type: Sequelize.DATE,
                allowNull: true
            },

            telefone: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('passageiro');
    }
};