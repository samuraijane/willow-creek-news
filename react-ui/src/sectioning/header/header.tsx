import { NavLink } from "react-router-dom";
import navs from './../../data/navs.json';

const Header = (): JSX.Element => {
  const _navs = navs.map((nav) => <NavLink to={nav.href}>{nav.text}</NavLink>)

  return (
    <header>
      <div className="y-wrap">{_navs}</div>
    </header>
  );
};

export default Header;
