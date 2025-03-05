import { Link } from "react-router";
import GithubIcon from "../icons/socialIcons/GithubIcon";
import LinkedinIcon from "../icons/socialIcons/LinkedinIcon";
import TransitionTriangle from "../shared/transitionTriangle/TransitionTriangle";
import "./Footer.scss";
import { coreTitle } from "../../data/core";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <TransitionTriangle id="footer" />
      <div className="footer">
        <div className="footerTop">
          <div className="topSocial">
            <div>Social Platform Links</div>
            <div className="topSocialContainer">
              <a href="https://github.com/JeJeeeh" className="topItem">
                <GithubIcon color="white" />
              </a>
              <a
                href="https://linkedin.com/in/jason-jonathan-47006a25b"
                className="topItem"
              >
                <LinkedinIcon color="white" />
              </a>
            </div>
          </div>
          <div className="topLinks">
            <div>Go to</div>
            <div className="topLinksContainer">
              <Link to={"/"}>
                <div className="topLinksItem">Home</div>
              </Link>
              <Link to={"/projects"}>
                <div className="topLinksItem">Projects</div>
              </Link>
              <Link to={"/about"}>
                <div className="topLinksItem">About Me</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="bottomTitle">
            <div className="bottomTitleLogo">{coreTitle.title}</div>
            <div className="bottomTitleTag">
              <div className="tagDescription">{coreTitle.tag}</div>
              <div>&copy; {year} Jason Jonathan Effendi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
