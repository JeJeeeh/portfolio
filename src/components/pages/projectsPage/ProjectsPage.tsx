import { projectsData } from "../../../data/projects";
import ProjectCard from "../../projects/ProjectCard/ProjectCard";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const titleData = {
    title: "[ ...Projects ]",
  };

  return (
    <div className="projects">
      <SectionTitle {...titleData} />
      <div className="content">
        {Object.keys(projectsData).map((project, index) => (
          <ProjectCard key={index} slug={project} {...projectsData[project]} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
