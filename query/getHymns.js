const { Agenda, Hymn, Agenda_Hymns } = require('../models');

const hymnsWithAgendas = async () => {
  const agendas = await Hymn.findAll({
    include: [{
        model: Agenda,
        as: 'agendas',
        required: false,
        attributes: ['date', 'name'],
        through: {
          model: Agenda_Hymns,
          as: 'agendaHymns',
          attributes: [],
        }
    }]
  });
  console.log("All hymns with their associated agendas:", JSON.stringify(agendas, null, 4))
};

const run = async () => {
    await hymnsWithAgendas();
    await process.exit();
}

run();