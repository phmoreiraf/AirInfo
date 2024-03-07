'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('viagem_aviao', 'data_partida', {
      type: Sequelize.DATEONLY,
      allowNull: true
    });
    await queryInterface.changeColumn('viagem_aviao', 'data_chegada', {
      type: Sequelize.DATEONLY,
      allowNull: true
    });

    await queryInterface.addColumn('viagem_aviao', 'hora_partida', {
      type: Sequelize.TIME,
      allowNull: true
    });

    await queryInterface.addColumn('viagem_aviao', 'hora_chegada', {
      type: Sequelize.TIME,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('viagem_aviao', 'hora_partida');
    await queryInterface.removeColumn('viagem_aviao', 'hora_chegada');

    await queryInterface.changeColumn('viagem_aviao', 'data_partida', {
      type: Sequelize.DATE,
      allowNull: true
    });
    await queryInterface.changeColumn('viagem_aviao', 'data_chegada', {
      type: Sequelize.DATE,
      allowNull: true
    });
  }
};
