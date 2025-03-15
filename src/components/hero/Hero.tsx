import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import TransitionTriangle from "../shared/transitionTriangle/TransitionTriangle";
import "./Hero.scss";
import MorphSvg from "./MorphSvg";

const Hero = () => {
  const hero: BannerLayer = {
    className: "heroParalax",
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="heroContainer">
        <div className={"heroDescription"}>
          <div className="heroDescriptionTitle">Hi, my name is Jason!</div>
          <div>Let's turn your creative ideas into reality!</div>
        </div>
        <div className="heroCanvas">
          <MorphSvg />
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
