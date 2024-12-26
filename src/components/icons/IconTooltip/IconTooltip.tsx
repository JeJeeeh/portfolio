import { TechStack } from "../../projects/ProjectCard/ProjectCard";
import CsharpIcon from "../techIcons/CsharpIcon";
import ReactIcon from "../techIcons/ReactIcon";
import TypescriptIcon from "../techIcons/TypescriptIcon";
import "./IconTooltip.scss";

interface Props {
  techStack: string;
}

const IconTooltip = ({ techStack }: Props) => {
  const getIconWithTooltip = () => {
    const tooltipText = techStack;

    switch (techStack) {
      case TechStack.react:
        return (
          <div className="tooltip">
            <ReactIcon />
            <span className="tooltip__text">{tooltipText}</span>
          </div>
        );
      case TechStack.typescript:
        return (
          <div className="tooltip">
            <TypescriptIcon />
            <span className="tooltip__text">{tooltipText}</span>
          </div>
        );
      case TechStack.csharp:
        return (
          <div className="tooltip">
            <CsharpIcon />
            <span className="tooltip__text">{tooltipText}</span>
          </div>
        );
      default:
        return <></>;
    }
  };

  return <div>{getIconWithTooltip()}</div>;
};

export default IconTooltip;
