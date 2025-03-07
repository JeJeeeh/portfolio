import SectionTitle from "../shared/sectionTitle/SectionTitle";
import heroPortrait from "../../assets/hero_potrait.png";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import "./About.scss";
import { testimonialsData } from "../../data/testimonials";
import TestimonialCard from "../pages/aboutPage/testimonials/TestimonialCard";

const About = () => {
  const titleData = {
    title: "About Me",
  };

  const [accent, setAccent] = useState<string | null>(null);

  return (
    <div className="about">
      <Parallax opacity={[0, 1]} easing={[0.2, -0.6, 0.4, 1]}>
        <SectionTitle {...titleData} />
      </Parallax>
      <Parallax
        className="aboutContainer"
        opacity={[0, 1]}
        easing={[0.5, 1, 0, 1]}
      >
        <div className="aboutTop">
          <img src={heroPortrait} alt="Portrait" className="topLeft" />
          <div className="topRight">
            <div className="rightTitle">Hi, I'm Jason Jonathan Effendi!</div>
            <div>
              I'm a software engineer with a passion for creating and solving
              problems.
            </div>
            <div>
              My goal is to help bring people's creative ideas to life through
              technology, and
            </div>
            <Parallax
              onProgressChange={(progress) => {
                if (progress > 0.3) {
                  setAccent("leftAccent");
                } else {
                  setAccent(null);
                }
              }}
            >
              <div className={accent ? accent : ""}>
                I'm excited about making a positive impact in the world.
              </div>
            </Parallax>
          </div>
        </div>
        <hr />
        <div className="aboutBottom">
          <div className="bottomDescription">
            I've had the pleasure of working with amazing people. Here’s what
            they think about our collaboration!
          </div>
          <div className="bottomContainer">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
