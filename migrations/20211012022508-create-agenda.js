'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      is5thSunday: {
        type: Sequelize.BOOLEAN
      },
      isDaylightSavingsChange: {
        type: Sequelize.BOOLEAN
      },
      isFastSunday: {
        type: Sequelize.BOOLEAN
      },
      isGeneralConference: {
        type: Sequelize.BOOLEAN
      },
      isMeetingTimeChange: {
        type: Sequelize.BOOLEAN
      },
      isPrimaryProgram: {
        type: Sequelize.BOOLEAN
      },
      isStakeConference: {
        type: Sequelize.BOOLEAN
      },
      isWardConference: {
        type: Sequelize.BOOLEAN
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Agendas');
  }
};