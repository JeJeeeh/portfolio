import { Parallax } from "react-scroll-parallax";
import SectionTitle from "../shared/sectionTitle/SectionTitle";
import TransitionTriangle from "../shared/transitionTriangle/TransitionTriangle";
import "./Skills.scss";
import { useState } from "react";

const Skills = () => {
  const titleData = {
    title: "[ ...Skills ]",
    body: [
      "A showcase of my technical expertise and creative abilities,",
      "built through hands-on experience and a passion for learning.",
    ],
  };

  const [style, setStyle] = useState<string>("");

  return (
    <div>
      <div className="skills">
        <Parallax
          onProgressChange={(progress) => {
            if (progress > 0.5) {
              setStyle("section__hero");
            } else {
              setStyle("");
            }
          }}
        >
          <SectionTitle {...titleData} className={style} />
        </Parallax>
      </div>
      <TransitionTriangle id="bottom" />
    </div>
  );
};

export default Skills;
