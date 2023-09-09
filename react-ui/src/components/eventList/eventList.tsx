import { formatShortDate } from '../../helpers/formatShortDate';
import { simpleRandomInt } from '../../helpers/simpleRandomInt';
import './eventList.scss';

// TODO add this later
// enum Type {
//   EldersQuorum = "ELDERS_QUORUM",
//   Primary = "PRIMARY",
//   ReliefSociety = "RELIEF_SOCIETY",
//   SundaySchool = "SUNDAY_SCHOOL",
//   Ward = "WARD",
//   YoungMen = "YOUNG_MEN",
//   YoungWomen = "YOUNG_WOMEN",
// }

interface Contact {
  name: string;
  phone: string;
}

interface Location {
  address: string;
  name: string;
}

interface Event {
  announcementEndDate: string;
  announcementStartDate: string;
  contact: Contact[];
  description: string;
  eventEndDate: string;
  eventStartDate: string;
  isPriority: boolean;
  location: Location;
  posterURL: string;
  title: string;
  // type: Type;
  type: string;
}

interface EventListProps {
  eventData: Event[];
}

const EventList = ({ eventData }: EventListProps): JSX.Element => {

  const now = new Date().getTime();

  const events = eventData.filter(x => Date.parse(x.announcementStartDate) < now && now < Date.parse(x.announcementEndDate) && x.isPriority)
    .map((event, index) => {
      const msDateEnd = new Date(Date.parse(event.eventEndDate));
      const msDateStart = new Date(Date.parse(event.eventStartDate));

      const shortDate = formatShortDate(msDateEnd, msDateStart);
      return (
        <li key={`${index}-${simpleRandomInt()}`}>
          <p><span className="events__event-date">{shortDate}</span><span>{event.title}</span></p>
        </li>
      );
  });

  return (
    <>
      <h2 className="block-title">Upcoming events</h2>
      <ul className="events events--short-date">
        {events}
      </ul>
    </>
  )
};

export default EventList;