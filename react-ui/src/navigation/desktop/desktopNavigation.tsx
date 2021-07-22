import { NavLink } from "react-router-dom";


const DesktopNavigation = (): JSX.Element => {
  return (
    <nav className="nav nav--header y-wrap y-wrap--inner">
      <div className="nav__logo-container">
        <NavLink activeClassName="navs__active" exact={true} to="/">Home</NavLink>
      </div>
      <p>DESKTOP NAV</p>
      <ul className="nav__navs">
        <li>
          <NavLink activeClassName="navs__active" exact={true} to="/projects">Projects</NavLink>
          <NavLink activeClassName="navs__active" exact={true} to="/reviews">Reviews</NavLink>
          <NavLink activeClassName="navs__active" exact={true} to="/faq">FAQ</NavLink>
          <NavLink activeClassName="navs__active" exact={true} to="/contact">Contact</NavLink>
          <NavLink activeClassName="navs__active" exact={true} to="/chat">Chat</NavLink>
        </li>
        <li>
          <NavLink activeClassName="navs__active" exact={true} to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink activeClassName="navs__active" exact={true} to="/credits">Credits</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;