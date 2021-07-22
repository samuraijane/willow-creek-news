import { NavLink } from "react-router-dom";
import { MobileNavigationProps } from '../../interface';
import data from '../../assets/json/navs.json';
import './mobileNavigation.scss';

const MobileNavigation = ({
  handleMobileNav,
  isShowMobileNav
}: MobileNavigationProps): JSX.Element => {

  const primaryNavs = data.filter(x => x.group === "primary" && x.isActive).map((nav, index) => {
    return (
      <li key={`${nav.value.toLowerCase()}-${index}`}>
        <NavLink
          activeClassName={nav.activeClassName}
          exact={nav.exact}
          key={`${nav.value.toLowerCase()}-${index}`}
          onClick={handleMobileNav}
          to={nav.href}
        >
          {nav.value}
        </NavLink>
      </li>
    );
  });

  const secondaryNavs = data.filter(x => x.group === "secondary" && x.isActive).map((nav, index) => {
    return (
      <li key={`${nav.value.toLowerCase()}-${index}`}>
        <NavLink
          activeClassName={nav.activeClassName}
          exact={nav.exact}
          onClick={handleMobileNav}
          to={nav.href}
        >
          {nav.value}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      {isShowMobileNav && (
        <nav className="flyout-menu">
          <ul className="nav__navs nav__navs--flyout-menu">
            {primaryNavs}
          </ul>
          <ul className="nav__navs nav__navs--flyout-menu">
            {secondaryNavs}
          </ul>
          <div className="flyout-menu__contact">
            <span>3155 Trickum Road NE</span>
            <span>Marietta, GA 30066</span>
            <span>770-549-6132</span>
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileNavigation;