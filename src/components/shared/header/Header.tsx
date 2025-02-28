import { Link, NavLink } from "react-router";
import HomeIcon from "../../icons/HomeIcon";
import PersonIcon from "../../icons/PersonIcon";
import StarIcon from "../../icons/StarIcon";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header__title">
        <Link to={"/"}>
          <div className="header__title__logo">JJE</div>
        </Link>
        <div className="header__title__tag">
          Front-end Developer | Creating Interactive UIs
        </div>
      </div>
      <div className="header__menu">
        <NavLink to={"/"}>
          {({ isActive }) => (
            <div
              className={`header__menu__item ${
                isActive ? "header__menu__item--active" : ""
              }`}
            >
              <HomeIcon />
              <div>Home</div>
            </div>
          )}
        </NavLink>
        <NavLink to={"/projects"}>
          {({ isActive }) => (
            <div
              className={`header__menu__item ${
                isActive ? "header__menu__item--active" : ""
              }`}
            >
              <StarIcon />
              <div>Projects</div>
            </div>
          )}
        </NavLink>
        <NavLink to={"/about"}>
          {({ isActive }) => (
            <div
              className={`header__menu__item ${
                isActive ? "header__menu__item--active" : ""
              }`}
            >
              <PersonIcon color="white" />
              <div>About Me</div>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
