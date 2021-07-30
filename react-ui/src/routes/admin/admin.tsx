import data from '../../mocks/sacrament_meeting.json';
import { simpleRandomInt } from '../../helpers/simpleRandomInt';

import './admin.scss';

const Admin = (): JSX.Element => {

  const agendas = data.map((agenda, index) => {

    const { admin, date, holiday, music, prayer, speakers, type } = agenda;

    return (
      <li key={`${index}–${simpleRandomInt()}`}>
        <div className="agenda-block__subsection">
          <h2>Date</h2>
          <p>{date ? date : ''}</p>
        </div>
        <div className="agenda-block__subsection">
          <h2>Admin</h2>
          <p>{admin && admin.presiding ? `Presiding ${admin.presiding}` : ''}</p>
          <p>{admin && admin.conducting ? `Conducting: ${admin.conducting}` : ''}</p>
        </div>
        <div className="agenda-block__subsection">
          <h2>Speakers</h2>
          <ul>
            {
              speakers && speakers.length > 0 ?
                speakers.map((speaker, index) => {
                  return (
                    <li key={`${index}-${simpleRandomInt()}`}>{speaker.name}</li>
                  )
                }) : ''
            }
          </ul>
        </div>
        <div className="agenda-block__subsection">
          <h2>Music Admin</h2>
          <p>{music && music.music_director ? `Director ${music.music_director}` : ''}</p>
          <p>{music && music.organist ? `Organist ${music.organist}` : ''}</p>
        </div>
        <div className="agenda-block__subsection">
          <h2>Hymns</h2>
          <p>{music && music.hymn && music.hymn.opening ? `Opening ${music.hymn.opening.title} (${music.hymn.opening.number})` : ''}</p>
          <p>{music && music.hymn && music.hymn.sacrament ? `Sacrament ${music.hymn.sacrament.title} (${music.hymn.sacrament.number})` : ''}</p>
          <p>{music && music.hymn && music.hymn.intermediate ? `Intermediate ${music.hymn.intermediate.title} (${music.hymn.intermediate.number})` : ''}</p>
          <p>{music && music.hymn && music.hymn.closing ? `Closing ${music.hymn.closing.title} (${music.hymn.closing.number})` : ''}</p>
        </div>
        <div className="agenda-block__subsection">
          <h2>Prayers</h2>
          <p>{prayer && prayer.opening_prayer ? `Invocation ${prayer.opening_prayer}` : ''}</p>
          <p>{prayer && prayer.closing_prayer ? `Benediction ${prayer.closing_prayer}` : ''}</p>
        </div>
      </li>
    );
  })

  return (
    <div className="y-wrap y-wrap--inner">
      <ul className="agenda-block">
        {agendas}
      </ul>
    </div>
  );
};

export default Admin;