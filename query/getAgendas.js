const { Agenda, Hymn, Agenda_Hymn, Music, Agenda_Music, Widget, Agenda_Widget } = require('../models');
const music = require('../models/music');

const agendasWithHymns = async () => {
  const agendas = await Agenda.findAll({
    include: [
      {
        model: Hymn,
        as: 'hymns',
        required: false,
        attributes: ['id', 'title'],
        through: {
          model: Agenda_Hymn,
          as: 'Agenda_Hymns',
          attributes: ['agendaId', 'hymnId', 'order'],
        }
      },
      {
        model: Music,
        as: 'musics',
        required: false,
        attributes: ['title'],
        through: {
          model: Agenda_Music,
          as: 'Agenda_Musics',
          attributes: ['order']
        }
      },
      // {
      //   model: Widget,
      //   as: 'widgets',
      //   required: false,
      //   attributes: ['title'],
      //   through: {
      //     model: Agenda_Widget,
      //     as: 'agendaWidgets',
      //     attributes: ['order']
      //   }
      // }
    ]
  })
  // .catch(err => console.log(`ERROR --> ${err}`));
  console.log("All agendas with their associated hymns:", JSON.stringify(agendas, null, 4))
};

const run = async () => {
    await agendasWithHymns();
    await process.exit();
}

run();