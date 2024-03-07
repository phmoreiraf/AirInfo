'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('usuario',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },

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
        },

        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      }
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};
