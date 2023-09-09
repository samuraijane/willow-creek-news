import { useState } from 'react';
import './leadingImage.scss';

interface SingleImageProps {
  alt: string;
  caption: string;
  date: string;
  type: string;
  url: string;
}

const LeadingImage = ({
  alt, caption, date, type, url
}: SingleImageProps): JSX.Element => {

  const [readyState, setReadyState] = useState(false);

  const handleImageLoad = () => {
    setReadyState(true);
  };

  const leadingImage = <img alt={alt} onLoad={handleImageLoad} src={url} />;

  return (
    <div className="leading">
      <h2 className="block-title">Family History Moment</h2>
      <div className={`b-image b-image--leading ${readyState ? 'b-image--leading-active' : ''}`}>
        <figure className="weekly-highlight">
          <div className="c-image c-image--leading">
            {leadingImage}
          </div>
          <figcaption>
            <p><span>{date}</span>{caption}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  )
};

export default LeadingImage;