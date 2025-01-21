import { Link } from "react-router";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TransitionTriangle from "../shared/transitionTriangle/TransitionTriangle";
import "./Footer.scss";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <TransitionTriangle id="footer" />
      <div className="footer">
        <div className="footer__top">
          <div className="footer__top__social">
            <div>Social Platform Links</div>
            <div className="footer__top__social__container">
              <a
                href="https://github.com/JeJeeeh"
                className="footer__top__social__item"
              >
                <GithubIcon color="white" />
              </a>
              <a
                href="https://linkedin.com/in/jason-jonathan-47006a25b"
                className="footer__top__social__item"
              >
                <LinkedinIcon color="white" />
              </a>
            </div>
          </div>
          <div className="footer__top__links">
            <div>Go to</div>
            <div className="footer__top__links__container">
              <Link to={"/"}>
                <div className="footer__top__links__item">Home</div>
              </Link>
              <Link to={"/projects"}>
                <div className="footer__top__links__item">Projects</div>
              </Link>
              <Link to={"/about"}>
                <div className="footer__top__links__item">About Me</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__title">
            <div className="footer__bottom__title__logo">JJE</div>
            <div className="footer__bottom__title__tag">
              <div>Front-end Developer | Creating Interactive UIs</div>
              <div>&copy; {year} Jason Jonathan Effendi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
