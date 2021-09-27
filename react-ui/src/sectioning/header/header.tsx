import { MouseEventHandler } from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import DesktopNavigation from '../../navigation/desktop/desktopNavigation';
import FlyoutButton from './subcomponents/flyoutButton';
import MobileNavigation from '../../navigation/mobile/mobileNavigation';
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll';
import SVGImage, { AVATAR } from '../../components/svg';
import './header.scss';

interface HeaderProps {
  isMobileView: boolean;
}

const Header = ({ isMobileView }: HeaderProps): JSX.Element => {
  // const [isMobileView, setIsMobileView] = useState(true);  // TODO implement hook that detects screen width
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);

  useDisableBodyScroll(isShowMobileNav);

  const handleMobileNav: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (): void => {
    setIsShowMobileNav(!isShowMobileNav);
  };

  const navIconClass = `nav-icon ${isShowMobileNav ? 'nav-icon--hide' : ''}`;

  return (
    <header>
      <div className="y-absolute">
        <nav className="y-wrap y-wrap--inner y-align y-align--hv">
          {isMobileView && (
            <FlyoutButton handleMobileNav={handleMobileNav} isShowMobileNav={isShowMobileNav} />
          )}
          {isMobileView ?
            <MobileNavigation handleMobileNav={handleMobileNav} isShowMobileNav={isShowMobileNav} /> :
            <DesktopNavigation />
          }
          <NavLink
            className={navIconClass}
            to="/login"
          >
            <SVGImage className="svg__default" type={AVATAR} />
          </NavLink>  
        </nav>
      </div>
    </header>
  );
};

export default Header;