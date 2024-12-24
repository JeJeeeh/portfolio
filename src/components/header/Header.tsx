import CallIcon from "../icons/CallIcon";
import HomeIcon from "../icons/HomeIcon";
import PersonIcon from "../icons/PersonIcon";
import StarIcon from "../icons/StarIcon";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <div className="header__title__logo">JJE</div>
        <div className="header__title__tag">
          Front-end Developer | Creating Interactive UIs with React
        </div>
      </div>
      <div className="header__menu">
        <div className="header__menu__item">
          <HomeIcon />
          <div>Home</div>
        </div>
        <div className="header__menu__item">
          <StarIcon />
          <div>Projects</div>
        </div>
        <div className="header__menu__item">
          <PersonIcon />
          <div>About Me</div>
        </div>
        <div className="header__menu__item">
          <CallIcon />
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
