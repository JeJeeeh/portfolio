import { ProjectData } from "../../data/projects";
import "./ProjectCard.scss";

interface Props {
  className: string;
  project: ProjectData;
}

const ProjectCard = ({ className, project }: Props) => {
  return (
    <div className={`${className} projectCard`}>
      <div className="projectCard__image"></div>
      {project.title}
    </div>
  );
};

export default ProjectCard;
