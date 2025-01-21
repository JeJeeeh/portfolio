import { Parallax } from "react-scroll-parallax";
import SectionTitle from "../shared/sectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.scss";
import { ProjectData } from "../../data/projects";
import { Link } from "react-router";

interface Props {
  projectsData: { [key: string]: ProjectData };
}

const Projects = ({ projectsData = {} }: Props) => {
  const displayedProjects = ["svg-editor-in-template-designer", "kitchenwares"];

  const titleData = {
    title: "[ ...Projects ]",
    body: [
      "A collection of my most exciting and meaningful work, demonstrating",
      "innovation, problem-solving, and a drive to bring ideas to life",
    ],
  };

  return (
    <div className="projects">
      <Parallax opacity={[0, 1]} easing={[0.2, 1, 0, 1]}>
        <SectionTitle {...titleData} />
      </Parallax>
      <Parallax
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        opacity={[0, 1]}
        easing={[0.5, 1, 0, 1]}
      >
        <ProjectCard
          slug={displayedProjects[0]}
          {...projectsData[displayedProjects[0]]}
        />
      </Parallax>
      <Parallax
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        opacity={[0, 1]}
        easing={[0.2, 1, 0, 1]}
      >
        <ProjectCard
          slug={displayedProjects[1]}
          {...projectsData[displayedProjects[1]]}
        />
      </Parallax>
      <Parallax
        opacity={[0, 1]}
        easing={[0.2, 1, 0, 1]}
        className="projects__footer"
      >
        <Link to={"/projects"}>&lt;See more projects here!&gt;</Link>
      </Parallax>
    </div>
  );
};

export default Projects;
