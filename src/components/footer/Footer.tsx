import TransitionTriangle from "../shared/transitionTriangle/TransitionTriangle";
import "./Footer.scss";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <TransitionTriangle id="footer" />
      <div className="footer">
        <div className="footer__top">
          <div className="footer__top__social">Social Platform Links</div>
          <div className="footer__top__links">
            <div>Go to</div>
            <div className="footer__top__links__container">
              <div className="footer__top__links__item">Home</div>
              <div className="footer__top__links__item">Projects</div>
              <div className="footer__top__links__item">About Me</div>
              <div className="footer__top__links__item">Contact</div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__title">
            <div className="footer__bottom__title__logo">JJE</div>
            <div className="footer__bottom__title__tag">
              <div>
                Front-end Developer - Creating Interactive UIs with React
              </div>
              <div>&copy; {year} Jason Jonathan Effendi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
