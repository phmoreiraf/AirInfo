'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('avaliacao', 'avaliacao', {
            type: Sequelize.INTEGER,
            allowNull: true
        });
        //await queryInterface.removeColumn('avaliacao', 'nome');
        await queryInterface.addColumn('avaliacao', 'idUsuario', {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'usuario',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn('avaliacao', 'avaliacao', {
            type: Sequelize.STRING,
            allowNull: true
        });
        await queryInterface.addColumn('avalicao', 'nome', {
            type: Sequelize.STRING,
            allowNull: true
        });
        await queryInterface.removeColumn('avaliacao', 'idUsuario');
    }
};