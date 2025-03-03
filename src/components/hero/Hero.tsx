import "./Hero.scss";
import heroPortrait from "../../assets/hero_potrait.png";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import TransitionTriangle from "../shared/transitionTriangle/TransitionTriangle";

const Hero = () => {
  const hero: BannerLayer = {
    className: "heroContainer",
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="heroContainer">
        <img src={heroPortrait} alt="" className="heroProfile" />
        <div className={"heroDescription"}>
          <div>
            Hi, my name is Jason! I'm a Front-end Developer dedicated to
          </div>
          <div>bring ideas to life with modern web technologies.</div>
          <div>Let's create something amazing together!</div>
        </div>
      </div>
    ),
  };

  const transitionTriangle: BannerLayer = {
    className: "heroTriangle",
    shouldAlwaysCompleteAnimation: true,
    children: <TransitionTriangle id="top" />,
  };

  return (
    <ParallaxBanner layers={[hero, transitionTriangle]} className="hero" />
  );
};

export default Hero;
