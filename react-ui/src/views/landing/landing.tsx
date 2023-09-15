import News from '../../components/news/news';
import LeadingImage from '../../components/leadingImage/leadingImage';
import QuoteHighlight from '../../components/quoteHighlight/quoteHighlight';
import { SacramentMeeting } from '../../components/sacrament-meeting/sacrament-meeting';
import SVGImage, { LAURELS } from '../../components/svg';

import { LeadingImageProps } from '../../components/leadingImage/leading-image-types';
import { NewsItem } from '../../components/news/news-types';
import { QuoteProps } from '../../components/quoteHighlight/quote-types';
import { SacramentMeetingProps } from '../../components/sacrament-meeting/sacrament-meeting-types';

import { json2Ts } from '../../helpers/json2Ts';
import pageData from '../../mocks/pageData.json';
import './landing.scss';

export const Landing = (): JSX.Element => {

  const leadingImage: LeadingImageProps = json2Ts(pageData.leadingImage);
  const news: NewsItem[] = json2Ts(pageData.news);
  const quote: QuoteProps = json2Ts(pageData.quote);
  const sacramentMeeting: SacramentMeetingProps = json2Ts(pageData.sacramentMeeting);

  return (
    <>
      <LeadingImage {...leadingImage} />
      <SVGImage className="svg__center" type={LAURELS} />
      <SacramentMeeting {...sacramentMeeting} />
      <SVGImage className="svg__center" type={LAURELS} />
      <News news={news} />
      <SVGImage className="svg__center" type={LAURELS} />
      <QuoteHighlight {...quote} />
    </>
  );
};
