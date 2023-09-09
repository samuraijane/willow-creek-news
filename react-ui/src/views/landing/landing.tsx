import News from '../../components/news/news';
import SVGImage, { LAURELS } from '../../components/svg';
import LeadingImage from '../../components/leadingImage/leadingImage';
import QuoteHighlight from '../../components/quoteHighlight/quoteHighlight';
import leadingImage from '../../mocks/leadingImage.json';
import quote from '../../mocks/quote.json';
import { SacramentMeeting } from '../../components/sacrament-meeting/sacrament-meeting';
import './landing.scss';

export const Landing = (): JSX.Element => {
  return (
    <>
      <LeadingImage {...leadingImage}/>
      <SVGImage className="svg__center" type={LAURELS}/>
      <SacramentMeeting />
      <SVGImage className="svg__center" type={LAURELS}/>
      <News />
      <SVGImage className="svg__center" type={LAURELS}/>
      <QuoteHighlight {...quote}/>
    </>
  );
};
