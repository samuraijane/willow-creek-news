import { FunctionComponent } from 'react';
import Avatar from './icons/avatar';
import Facebook from './icons/facebook';
import GitHub from './icons/github';
import Google from './icons/google';
import Laurels from './icons/laurels';
import Instagram from './icons/instagram';
import Twitter from './icons/twitter';

import './style.scss';

interface SVGImageProps {
  className?: string;
  type: string;
}

export const AVATAR: string  = 'avatar';
export const FACEBOOK: string = 'facebook';
export const GITHUB: string = 'github';
export const GOOGLE: string = 'google';
export const INSTAGRAM: string = 'instagram';
export const LAURELS: string = 'laurels';
export const TWITTER: string = 'twitter';

const iconMap = {
  [AVATAR] : (<Avatar />),
  [FACEBOOK] : (<Facebook />),
  [GITHUB] : (<GitHub />),
  [GOOGLE] : (<Google />),
  [INSTAGRAM] : (<Instagram />),
  [LAURELS]: (<Laurels />),
  [TWITTER] : (<Twitter />)
};

const SVGImage: FunctionComponent<SVGImageProps> = ({className, type}): JSX.Element => {

  return (
    <div className={className}>
      {iconMap[type]}
    </div>
  )
};

export default SVGImage;