import { Link, NavLink } from "react-router";
import HomeIcon from "../../icons/HomeIcon";
import PersonIcon from "../../icons/PersonIcon";
import StarIcon from "../../icons/StarIcon";
import HamburgerIcon from "../../icons/HamburgerIcon";
import "./Header.scss";
import { useState } from "react";
import CloseIcon from "../../icons/CloseIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header" id="header">
      <div className="title">
        <Link to={"/"}>
          <div className="logo">JJE</div>
        </Link>
        <div className="tag">
          Front-end Developer | Creating Interactive UIs
        </div>
      </div>
      <div className="menu">
        <NavLink to={"/"}>
          {({ isActive }) => (
            <div className={`navItem ${isActive ? "item--active" : ""}`}>
              <HomeIcon />
              <div>Home</div>
            </div>
          )}
        </NavLink>
        <NavLink to={"/projects"}>
          {({ isActive }) => (
            <div className={`navItem ${isActive ? "item--active" : ""}`}>
              <StarIcon />
              <div>Projects</div>
            </div>
          )}
        </NavLink>
        <NavLink to={"/about"}>
          {({ isActive }) => (
            <div className={`navItem ${isActive ? "item--active" : ""}`}>
              <PersonIcon color="white" />
              <div>About Me</div>
            </div>
          )}
        </NavLink>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        <div className={`sidebar ${isOpen ? "open" : "close"}`}>
          <ul className="sidebarNav">
            <Link to={"/"}>
              <li className="navItem">
                <HomeIcon />
                <div>Home</div>
              </li>
            </Link>
            <Link to={"/projects"}>
              <li className="navItem">
                <StarIcon />
                <div>Projects</div>
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="navItem">
                <PersonIcon color="white" />
                <div>About Me</div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
