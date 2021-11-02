'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sundays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      isFastSunday: {
        type: Sequelize.BOOLEAN
      },
      is5thSunday: {
        type: Sequelize.BOOLEAN
      },
      isWardConference: {
        type: Sequelize.BOOLEAN
      },
      isStakeConference: {
        type: Sequelize.BOOLEAN
      },
      isGeneralConference: {
        type: Sequelize.BOOLEAN
      },
      isPrimaryProgram: {
        type: Sequelize.BOOLEAN
      },
      isMeetingTimeChange: {
        type: Sequelize.BOOLEAN
      },
      isDaylightSavingsChange: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Sundays');
  }
};