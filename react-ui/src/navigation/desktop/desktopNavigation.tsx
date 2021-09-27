import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SVGImage, { LOGO } from '../../components/svg';
import data from '../../assets/json/navs.json';
import './desktopNavigation.scss';


const DesktopNavigation = (): JSX.Element => {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    fetch('/status').then(res => res.json()).then(data => {
      if (data.isAuthenticated) {
        setIsAuth(true)
      }
    })
  }, []);

  const primaryNavs = data.filter(x => x.group === "primary" && x.isActive).map((nav, index) => {
    return (
      <li key={`${nav.value.toLowerCase()}-${index}`}>
        <NavLink
          activeClassName={nav.activeClassName}
          exact={nav.exact}
          key={`${nav.value.toLowerCase()}-${index}`}
          to={nav.href}
        >
          {nav.value}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <div className="nav__logo-container">
        <NavLink activeClassName="navs__active" exact={true} to="/">
          <SVGImage className="svg__center" type={LOGO}/>
        </NavLink>
      </div>
      <ul className="nav__navs navs__navs--desktop">
        {primaryNavs}
        {isAuth && (
          <NavLink activeClassName="navs__active" exact={true} to="/admin">Admin</NavLink>
        )}
      </ul>
    </>
  );
};

export default DesktopNavigation;
