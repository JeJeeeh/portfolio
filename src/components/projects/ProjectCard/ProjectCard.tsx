import IconTooltip from "../../icons/IconTooltip/IconTooltip";
import "./ProjectCard.scss";

export enum TechStack {
  "react" = "React",
  "typescript" = "TypeScript",
  "csharp" = "C#",
  "material" = "Material Design",
}

interface Props {
  title: string;
  techStacks: TechStack[];
  description: string;
  className?: string;
}

const ProjectCard = ({ title, techStacks, description, className }: Props) => {
  return (
    <div className={`projectCard ${className}`}>
      <div className="projectCard__display"></div>
      <div className="projectCard__info">
        <div className="projectCard__info__top">
          <div className="projectCard__info__title">{title}</div>
          <div className="projectCard__info__tech">
            {techStacks.map((techStack, index) => (
              <IconTooltip key={index} techStack={techStack} />
            ))}
          </div>
          <div className="projectCard__info__desc">{description}</div>
        </div>
        <div className="projectCard__info__detail">
          <div className="projectCard__info__button">See more</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
