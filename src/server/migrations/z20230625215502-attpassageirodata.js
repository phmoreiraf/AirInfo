'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('passageiro', 'data_nascimento', {
            type: Sequelize.DATEONLY,
            allowNull: true
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('passageiro', 'data_nascimento');

        await queryInterface.changeColumn('passageiro', 'data_nascimento', {
            type: Sequelize.DATE,
            allowNull: true
        });
    }
};