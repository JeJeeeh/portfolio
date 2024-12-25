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
      <TransitionTriangle id="top" />
      <div className="skills">
        <SectionTitle {...titleData} />
        <div>Skills item</div>
      </div>
      <TransitionTriangle id="bottom" />
    </div>
  );
};

export default Skills;
