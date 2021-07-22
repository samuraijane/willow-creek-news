import { simpleRandomInt } from '../../helpers/simpleRandomInt';
import './historicalHighlight.scss';

interface Source {
  href: string;
  name: string;
  title: string;
}

interface historicalHighlightProps {
  author: string;
  historicalSummary: string;
  sources: Source[];
  title: string;
}

const HistoricalHighlight = ({
  author, historicalSummary, sources, title
}: historicalHighlightProps): JSX.Element => {

  const theSources = sources.map((source, index) => {
    return (
      <li key={`${index}-${simpleRandomInt()}`}>
        <h4><a href={source.href}>{source.title}</a></h4><span>{source.name ? `${String.fromCharCode(8212)} ${source.name}` :''}</span>
      </li>
    )
  });

  return (
    <div className="historical-highlight">
      <h2 className="block-title">Church history highlight</h2>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{__html: historicalSummary}} />
      <p className="historical-highlight__author">{author}</p>
      <div className="historical-highlight__b-sources">
        <h3>Sources</h3>
        <ul className="historical-highlight__sources">{theSources}</ul>
      </div>
    </div>
  )
};

export default HistoricalHighlight;