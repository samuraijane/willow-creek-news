import EventList from '../../components/eventList/eventList';
import HistoricalHighlight from '../../components/historicalHighlight/historicalHighlight';
import SVGImage, { LAURELS } from '../../components/svg';
import LeadingImage from '../../components/leadingImage/leadingImage';
import QuoteHighlight from '../../components/quoteHighlight/quoteHighlight';
import events from '../../mocks/events.json';
import histories from '../../mocks/history.json';
import leadingImage from '../../mocks/leadingImage.json';
import quote from '../../mocks/quote.json';
import './landing.scss';

const Landing = (): JSX.Element => {
  return (
    <div className="y-wrap y-wrap--inner">
      <LeadingImage {...leadingImage}/>
      <SVGImage className="svg__center" type={LAURELS}/>
      <EventList eventData={events} />
      <SVGImage className="svg__center" type={LAURELS}/>
      <HistoricalHighlight {...histories} />
      <SVGImage className="svg__center" type={LAURELS}/>
      <QuoteHighlight {...quote}/>
    </div>
  );
};

export default Landing;