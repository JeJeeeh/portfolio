import { Parallax } from "react-scroll-parallax";
import SectionTitle from "../shared/sectionTitle/SectionTitle";
import TransitionTriangle from "../shared/transitionTriangle/TransitionTriangle";
import "./Skills.scss";

const Skills = () => {
  const titleData = {
    title: "[ ...Skills ]",
    body: [
      "A showcase of my technical expertise and creative abilities,",
      "built through hands-on experience and a passion for learning.",
    ],
  };

  return (
    <div>
      <div className="skills">
        <Parallax opacity={[0, 1]} easing={[0.2, -0.6, 0.4, 1]}>
          <SectionTitle {...titleData} />
        </Parallax>
      </div>
      <TransitionTriangle id="bottom" />
    </div>
  );
};

export default Skills;
