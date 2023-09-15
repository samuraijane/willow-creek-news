import { simpleRandomInt } from '../../helpers/simpleRandomInt';
import { NewsProps } from './news-types';
import './news.scss';

// TODO find out if we are typing and consuming NewsProps and NewsItem correctly (unlike objects, we are passing in a raw array that is not attached to a keyname)
const News = ({ news }: NewsProps): JSX.Element => {

  const newsItems = news.map(newsItem => (
    <li key={simpleRandomInt()}>
      <div className='news__title'>{newsItem.title}</div>
      <p dangerouslySetInnerHTML={{ __html: newsItem.text }} />
    </li>
  ));

  return (
    <div className="news">
      <h2>News</h2>
      <ul className='news__list'>
        {newsItems}
      </ul>
    </div>
  );
};

export default News;