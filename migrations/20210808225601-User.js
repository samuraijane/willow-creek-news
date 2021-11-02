'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'username',
         Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'permissions',
         Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'avatarURL',
         Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'loginStrategy',
         Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'loginStrategyId',
        Sequelize.STRING
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Users',
        'username'
      ),
      queryInterface.removeColumn(
        'Users',
        'permissions'
      ),
      queryInterface.removeColumn(
        'Users',
        'avatarURL'
      ),
      queryInterface.removeColumn(
        'Users',
        'loginStrategy'
      ),
      queryInterface.removeColumn(
        'Users',
        'loginStrategyId'
      )
    ]);
  }
};
