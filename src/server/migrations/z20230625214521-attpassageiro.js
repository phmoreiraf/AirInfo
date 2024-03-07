'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('passageiro', 'cpf', {
            type: Sequelize.STRING,
            allowNull: true
        });
        await queryInterface.changeColumn('passageiro', 'telefone', {
            type: Sequelize.STRING,
            allowNull: true
        });
        await queryInterface.changeColumn('passageiro', 'rg', {
            type: Sequelize.STRING,
            allowNull: true
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('passageiro', 'cpf');
        await queryInterface.removeColumn('passageiro', 'telefone');
        await queryInterface.removeColumn('passageiro', 'rg');

        await queryInterface.changeColumn('passageiro', 'cpf', {
            type: Sequelize.INTEGER,
            allowNull: true
        });
        await queryInterface.changeColumn('passageiro', 'telefone', {
            type: Sequelize.INTEGER,
            allowNull: true
        });
        await queryInterface.changeColumn('passageiro', 'rg', {
            type: Sequelize.INTEGER,
            allowNull: true
        });
    }
};