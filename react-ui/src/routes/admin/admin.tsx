import { useEffect, useState } from 'react';

import data from '../../mocks/sacrament_meeting.json';
import { simpleRandomInt } from '../../helpers/simpleRandomInt';

import './admin.scss';

const Admin = (): JSX.Element => {

  const today = Date.now();

  const agendas = data.filter(x => Date.parse(x.date) > today).map((agenda, index) => {

    const { admin, business, date, holiday, music, prayer, speakers, type } = agenda;

    return (
      <li key={`${index}–${simpleRandomInt()}`}>
        <div className="agenda-block__subsection">
          <div className="agenda-block__subsection-header">
            <h2>Date</h2>
          </div>
          <p>{date ? date : ''}</p>
        </div>
        <div className="agenda-block__subsection">
          <div className="agenda-block__subsection-header">
            <h2>Admin</h2>
          </div>
          <ul>
            <li><span>Conducting</span>{admin && admin.conducting ? `${admin.conducting}` : ''}</li>
            <li><span>Presiding</span>{admin && admin.presiding ? `${admin.presiding}` : ''}</li>
            <li><span>Music Director</span>{music && music.music_director ? `${music.music_director}` : ''}</li>
            <li><span>Organist</span>{music && music.organist ? `${music.organist}` : ''}</li>
            <li><span>Stake Business</span>{business && business.isStakeBusiness ? 'yes' : 'no'}</li>
            <li><span>Ward Business</span>{business && business.isWardBusiness ? 'yes' : 'no'}</li>
          </ul>
        </div>
        {music && music.hymn && (
          <div className="agenda-block__subsection">
            <div className="agenda-block__subsection-header">
              <h2>Music</h2>
            </div>
            <ul>
              <li><span>Opening</span>{music.hymn.opening ? `${music.hymn.opening.number} – ${music.hymn.opening.title}` : '' }</li>
              <li><span>Sacrament</span>{music.hymn.sacrament ? `${music.hymn.sacrament.number} – ${music.hymn.sacrament.title}` : '' }</li>
              <li><span>Intermediate</span>{music.hymn.intermediate && music.hymn.intermediate.number ? `${music.hymn.intermediate.number} – ${music.hymn.intermediate.title}` : '' }</li>
              <li><span>Musical Number</span>{music.musical_number ? `${music.musical_number.title} – ${music.musical_number.performed_by}` : '' }</li>
              <li><span>Closing</span>{music.hymn.closing ? `${music.hymn.closing.number} – ${music.hymn.closing.title}` : '' }</li>
            </ul>
          </div>
        )}
        <div className="agenda-block__subsection">
          <div className="agenda-block__subsection-header">
            <h2>Prayers</h2>
          </div>
          <ul>
            <li><span>Invocation</span>{prayer && prayer.opening_prayer ? `${prayer.opening_prayer}` : ''}</li>
            <li><span>Benediction</span>{prayer && prayer.closing_prayer ? `${prayer.closing_prayer}` : ''}</li>
          </ul>
        </div>
        <div className="agenda-block__subsection">
          <div className="agenda-block__subsection-header">
            <h2>Speakers (listed in order)</h2>
          </div>
          <ul>
            {
              speakers && speakers.length > 0 ?
                speakers.map((speaker, index) => {
                  return (
                    <li key={`${index}-${simpleRandomInt()}`}>{speaker.name}</li>
                  )
                }) : <li>No speakers – Members of congregation will share testimonies</li>
            }
          </ul>
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