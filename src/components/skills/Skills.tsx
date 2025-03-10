import { Parallax } from "react-scroll-parallax";
import SectionTitle from "../shared/sectionTitle/SectionTitle";
import TransitionTriangle from "../shared/transitionTriangle/TransitionTriangle";
import { ProjectData } from "../../data/projects";
import { useEffect, useState } from "react";
import IconTooltip from "../icons/IconTooltip/IconTooltip";
import "./Skills.scss";

interface Props {
  projectsData: { [key: string]: ProjectData };
}

const Skills = ({ projectsData }: Props) => {
  const titleData = {
    title: "[ ...Skills ]",
    body: [
      "A showcase of my technical expertise and creative abilities,",
      "built through hands-on experience and a passion for learning.",
    ],
  };

  const [displayedTech, setDisplayedTech] = useState<[string, number][]>([]);
  const [otherTech, setOtherTech] = useState<string[]>([]);

  useEffect(() => {
    const techStackCount: { [key: string]: number } = {};

    Object.values(projectsData).forEach((project) => {
      project.techStacks.forEach((techStack) => {
        techStackCount[techStack] = (techStackCount[techStack] || 0) + 1;
      });
    });

    const sortedTechStack = Object.entries(techStackCount)
      .map(([techStack, count]) => [techStack, count] as [string, number]) // Explicit tuple typing
      .sort((a, b) => b[1] - a[1]);
    if (sortedTechStack.length <= 6) {
      setDisplayedTech(sortedTechStack);
    } else {
      setDisplayedTech(sortedTechStack.slice(0, 6));
      setOtherTech(sortedTechStack.slice(6).map(([techStack]) => techStack)); // Remaining
    }
  }, []);

  const [heightPercent, setHeightPercent] = useState<number>(0);

  return (
    <div>
      <div className="skills">
        <Parallax opacity={[0, 1]} easing={[0.24, 1, 0.4, 1]}>
          <SectionTitle {...titleData} />
        </Parallax>
        <div className="skillsContainer">
          <Parallax
            opacity={[0, 1]}
            easing={[0.24, 1, 0.4, 1]}
            className="skillsTableTitle"
          >
            Most Used Tech Stack Chart
          </Parallax>
          <div className="skillsTableContainer">
            <Parallax
              className="skillsTable"
              onProgressChange={(progress) => {
                if (progress <= 0.5) {
                  setHeightPercent(progress * 2);
                } else {
                  setHeightPercent(1);
                }
              }}
            >
              {displayedTech.map((project, index) => {
                const lineHeight = 3 * project[1] * heightPercent;
                return (
                  <div className="skillsTableItem" key={index}>
                    <div className="skillsItemContainer">
                      <div className="skillsItemIcon">
                        <IconTooltip
                          techStack={project[0]}
                          withTooltip={false}
                        />
                        {project[0]}
                      </div>
                    </div>
                    <div
                      className="skillsItemLine"
                      style={{
                        height: `${lineHeight}rem`,
                      }}
                    />
                  </div>
                );
              })}
            </Parallax>
          </div>
          <div className="skillsTableDescription">Technology Used</div>
        </div>
        <div className="skillsOther">
          <div className="skillsOtherTitle">
            <div>
              In addition to the technologies mentioned above, I have hands-on
            </div>
            <div>experience with these tools and technologies.</div>
          </div>
          <div className="skillsOtherContainer">
            {otherTech.map((tech, index) => (
              <div key={index} className="skillsOtherItem">
                <IconTooltip techStack={tech} withTooltip={false} />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      <TransitionTriangle id="bottom" />
    </div>
  );
};

export default Skills;
