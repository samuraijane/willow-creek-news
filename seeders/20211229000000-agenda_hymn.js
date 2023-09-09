'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Agenda_Hymns', [
      {
        agendaId: 1,
        hymnId: 1,
        order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendaId: 1,
        hymnId: 2,
        order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendaId: 1,
        hymnId: 3,
        order: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendaId: 2,
        hymnId: 117,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendaId: 2,
        hymnId: 175,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendaId: 2,
        hymnId: 64,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Agenda_Hymns', null, {});
  }
};
