import { FunctionComponent, MouseEventHandler, ReactElement } from 'react';

// LOCAL

enum GraphicPosition {
  Left = "left",
  Right = "Right"
};

interface CommonCardList {
  icon?: FunctionComponent;
  text: string;
}

// GLOBAL
export interface CardProps {
  cta: string;
  icon: string;
  text: string;
  title: string;
}

export interface CommonCardProps {
  className: string;
  ctaPrimary?: Cta;
  ctaSecondary?: Cta;
  description: string;
  graphic?: ReactElement;
  graphicPosition?: GraphicPosition;
  hasBgColor?: boolean;
  isAnchorLeft?: boolean;
  list?: CommonCardList[];
  title: string;
}

export interface Cta {
  action: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export interface HeaderProps {
  isMobileView: boolean;
}

export interface SVGImageProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  type: string;
}

interface ListItem {
  additionalInfo: string;
  conditionName: string;
  id: string;
}

export interface ListWithTitle {
  listItems: ListItem[];
  listSubtitle?: string;
  listTitle?: string;
}