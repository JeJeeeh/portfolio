import BackgroundTriangle from "../../shared/backgroundTriangle/BackgroundTriangle";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const titleData = {
    title: "[ ...Projects ]",
  };

  return (
    <div className="projects">
      <SectionTitle {...titleData} />
      <BackgroundTriangle />
      <div className="content">content here</div>
    </div>
  );
};

export default ProjectsPage;
