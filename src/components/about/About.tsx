import SectionTitle from "../shared/sectionTitle/SectionTitle";
import portrait from "../../assets/portrait.jpg";
import "./About.scss";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import GameIcon from "../icons/aboutIcons/GameIcon";
import CookingIcon from "../icons/aboutIcons/CookingIcon";
import GymIcon from "../icons/aboutIcons/GymIcon";
import MusicIcon from "../icons/aboutIcons/MusicIcon";

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
        <div className="aboutLeft">
          <div className="leftContent">
            <div>
              Hi, my name is Jason Jonathan Effendi and I am from Indonesia!
            </div>
            <div>
              I became a software engineer because I love creating and solving
            </div>
            <div>problems.</div>
            <div>
              One of my goals in life is to help people with their creative
              ideas to
            </div>
            <div>come to life.</div>
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
                I am excited about the chance to make positive impacts through
              </div>
              <div className={accent ? accent : ""}>Technology!</div>
            </Parallax>
          </div>
          <div className="leftSmall">
            <div>Here are some things that I enjoy when I am not working</div>
          </div>
          <div className="leftContainer">
            <div className="aboutContainerItem">
              <GameIcon /> Gaming
            </div>
            <div className="aboutContainerItem">
              <CookingIcon /> Cooking
            </div>
            <div className="aboutContainerItem">
              <GymIcon /> Fitness
            </div>
            <div className="aboutContainerItem">
              <MusicIcon /> Music
            </div>
          </div>
        </div>
        <img className="aboutRight" src={portrait} alt="" />
      </Parallax>
    </div>
  );
};

export default About;
