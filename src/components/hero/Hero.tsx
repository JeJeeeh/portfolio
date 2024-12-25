import { useEffect, useRef } from "react";
import "./Hero.scss";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const header = document.querySelector("#header");
    const triangle = document.querySelector("#triangletop");

    if (header && triangle && containerRef.current) {
      const headerHeight = parseFloat(window.getComputedStyle(header).height);
      const triangleHeight = parseFloat(
        window.getComputedStyle(triangle).height
      );

      const remainingHeight = `calc(95vh - ${headerHeight}px - ${triangleHeight}px)`;

      containerRef.current.style.height = remainingHeight;
    }
  }, [containerRef.current]);

  return (
    <div className="hero">
      <div className="hero__container" ref={containerRef}>
        <div className="hero__container__profile"></div>
        <div className="hero__container__description">
          <div>
            Hi, my name is Jason! I'm a Front-end Developer dedicated to
          </div>
          <div>
            bring ideas to life with modern web technologies using React
          </div>
          <div>Let's create something amazing together!</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
