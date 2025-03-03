import { projectsData } from "../../../data/projects";
import ProjectCard from "../../projects/ProjectCard/ProjectCard";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const titleData = {
    title: "[ ...Projects ]",
  };

  return (
    <div className="projectsPage">
      <SectionTitle {...titleData} />
      <div className="projectsPageContainer">
        {Object.keys(projectsData).map((project, index) => (
          <div className="projectCardContainer">
            <ProjectCard
              key={index}
              slug={project}
              {...projectsData[project]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
