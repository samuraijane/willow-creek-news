const { Hymn, Music, Agenda_Music } = require('../models');

const musicsWithOrders = async () => {
  const musics = await Music.findAll({
    include: [
      {
        model: Hymn,
        required: false,
        attributes: ['title']
      }
    ]
  })
  .catch(err => console.log(`ERROR --> ${err}`));
  console.log("All musics with their associated orders:", JSON.stringify(musics, null, 4))
};

const run = async () => {
    await musicsWithOrders();
    await process.exit();
}

run();