import { NavLink } from "react-router-dom";
import './header.scss';
import navs from './../../data/navs.json';

const Header = (): JSX.Element => {
  const _navs = navs.map((nav) => <NavLink to={nav.href}>{nav.text}</NavLink>)

  return (
    <header>
      <nav className="y-wrap navs">{_navs}</nav>
    </header>
  );
};

export default Header;
