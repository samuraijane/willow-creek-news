import { QuoteProps } from './quote-types';
import './quoteHighlight.scss';

const QuoteHighlight = ({
  alt,
  author,
  href,
  imageUrl,
  text
}: QuoteProps): JSX.Element => {

  return (
    <div className="b-image">
      <figure className="quote-highlight">
        <blockquote>{text}</blockquote>
        <a className="quote-highlight__tbd" href={href}>
          <div className="c-image c-image--author-quote">
            <img alt={alt} src={imageUrl} />
          </div>
          <figcaption>{author}</figcaption>
        </a>
        </figure>
    </div>
  )
};

export default QuoteHighlight;