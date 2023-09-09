const { Agenda, Hymn, Agenda_Hymn, Music, Agenda_Music, Widget, Agenda_Widget } = require('../models');
const music = require('../models/music');

const agendasWithWidgets = async () => {
  const agendas = await Agenda.findAll({
    include: [
      {
        model: Widget,
        as: 'widgets',
        required: false,
        attributes: ['isHymn'],
        through: {
          model: Agenda_Widget,
          as: 'agendaWidgets',
          attributes: ['order'],
        }
      },
      {
        model: Music,
        as: 'musics',
        required: false,
        attributes: ['title'],
        through: {
          model: Agenda_Music,
          as: 'agendaMusics',
          attributes: ['order']
        }
      }
    ]
  })
  .catch(err => console.log(`ERROR --> ${err}`));
  console.log("All agendas with their associated hymns:", JSON.stringify(agendas, null, 4))
};

const run = async () => {
    await agendasWithWidgets();
    await process.exit();
}

run();