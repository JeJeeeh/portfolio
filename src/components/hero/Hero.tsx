import "./Hero.scss";
import heroPortrait from "../../assets/hero_potrait.png";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import TransitionTriangle from "../shared/transitionTriangle/TransitionTriangle";

const Hero = () => {
  const hero: BannerLayer = {
    className: "hero__container",
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="hero__container">
        <img src={heroPortrait} alt="" className="hero__profile" />
        <div className={"hero__description"}>
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
    className: "hero__triangle",
    shouldAlwaysCompleteAnimation: true,
    children: <TransitionTriangle id="top" />,
  };

  return (
    // <div className="hero">
    //   <div className="hero__container">
    //     <img src={heroPortrait} alt="" className="hero__container__profile" />
    //     <div className="hero__container__description">
    //       <div>
    //         Hi, my name is Jason! I'm a Front-end Developer dedicated to
    //       </div>
    //       <div>
    //         bring ideas to life with modern web technologies using React
    //       </div>
    //       <div>Let's create something amazing together!</div>
    //     </div>
    //   </div>
    // </div>
    <ParallaxBanner layers={[hero, transitionTriangle]} className="hero" />
  );
};

export default Hero;
