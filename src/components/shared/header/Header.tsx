import CallIcon from "../../icons/CallIcon";
import HomeIcon from "../../icons/HomeIcon";
import PersonIcon from "../../icons/PersonIcon";
import StarIcon from "../../icons/StarIcon";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header__title">
        <div className="header__title__logo">JJE</div>
        <div className="header__title__tag">
          Front-end Developer | Creating Interactive UIs
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
          <PersonIcon color="white" />
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
