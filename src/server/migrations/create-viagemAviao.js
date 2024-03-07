'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('viagem_aviao', 
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      numero_aviao: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      local_embarque: {
        type: Sequelize.STRING,
        allowNull:true
      },

      local_desembarque: {
        type: Sequelize.STRING,
        allowNull:true
      },

      data_partida: {
        type: Sequelize.DATE,
        allowNull:true
      },

      data_chegada: {
        type: Sequelize.DATE,
        allowNull:true
      },

      total_assentos: {
        type: Sequelize.INTEGER,
        allowNull:true
      },

      empresa_aerea: {
        type: Sequelize.STRING,
        allowNull:true
      },

      codigo_portao: {
        type: Sequelize.STRING,
        allowNull:true
      },

      modelo_aeronave: {
        type: Sequelize.STRING,
        allowNull:true
      },

      valor: {
        type: Sequelize.INTEGER,
        allowNull:true
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
    await queryInterface.dropTable('viagem_aviao');
  }
};
