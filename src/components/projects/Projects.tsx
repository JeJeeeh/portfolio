import SectionTitle from "../shared/sectionTitle/SectionTitle";
import "./Projects.scss";

const Projects = () => {
  const titleData = {
    title: "[ ...Projects ]",
    body: [
      "A collection of my most exciting and meaningful work, demonstrating",
      "innovation, problem-solving, and a drive to bring ideas to life",
    ],
  };

  return (
    <div className="projects">
      <SectionTitle {...titleData} />
    </div>
  );
};

export default Projects;
