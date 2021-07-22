import { useEffect, useState } from 'react';

import './quoteHighlight.scss';

interface QuoteHighlightProps {
  alt: string;
  author: string;
  href: string;
  imageURL: string;
  text: string;
}

const QuoteHighlight = ({
  alt, author, href, imageURL, text
}: QuoteHighlightProps): JSX.Element => {

  return (
    <div className="b-image">
      <figure className="quote-highlight">
        <blockquote>{text}</blockquote>
        <a className="quote-highlight__tbd" href={href}>
          <div className="c-image c-image--author-quote">
            <img alt={alt} src={imageURL} />
          </div>
          <figcaption>{author}</figcaption>
        </a>
        </figure>
    </div>
  )
};

export default QuoteHighlight;