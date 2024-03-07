'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacao', {
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
      avaliacao: {
          type: Sequelize.STRING,
          allowNull: true

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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('avaliacao')
  }
};
