const { Agenda, Hymn, Agenda_Hymns } = require('../models');

const hymnsWithAgendas = async () => {
  const hymns = await Agenda.findAll({
    include: [{
        model: Hymn,
        as: 'hymns',
        required: false,
        attributes: ['hymnNo', 'title'],
        through: {
          model: Agenda_Hymns,
          as: 'agendaHymns',
          attributes: [],
        }
    }]
  });
  console.log("All agendas with their associated hymns:", JSON.stringify(hymns, null, 4))
};

const run = async () => {
    await hymnsWithAgendas();
    await process.exit();
}

run();