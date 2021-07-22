import { FunctionComponent } from 'react';
import Avatar from './icons/avatar';
import Laurels from './icons/laurels';

import './style.scss';

interface SVGImageProps {
  className?: string;
  type: string;
}

export const AVATAR: string  = 'avatar';
export const LAURELS: string = 'laurels';

const iconMap = {
  [AVATAR] : (<Avatar />),
  [LAURELS]: (<Laurels />)
};

const SVGImage: FunctionComponent<SVGImageProps> = ({className, type}): JSX.Element => {

  return (
    <div className={className}>
      {iconMap[type]}
    </div>
  )
};

export default SVGImage;