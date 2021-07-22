import { MouseEventHandler, SVGProps } from "react";


// TODO determine if it's worth finding a way to be more DRY between FlyoutButtonProps and MobileNavigationProps
export interface FlyoutButtonProps {
  handleMobileNav: MouseEventHandler<HTMLButtonElement>;
  isShowMobileNav: boolean;
}

export interface MobileNavigationProps {
  handleMobileNav: MouseEventHandler<HTMLAnchorElement>;
  isShowMobileNav: boolean;
}

export interface SVG {
  svg: SVGSVGElement;
}