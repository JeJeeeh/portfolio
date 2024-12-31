import { TechStack } from "../../../data/projects";
import CsharpIcon from "../techIcons/CsharpIcon";
import CssIcon from "../techIcons/CssIcon";
import DockerIcon from "../techIcons/DockerIcon";
import KubernetesIcon from "../techIcons/KubernetesIcon";
import PhpIcon from "../techIcons/PhpIcon";
import ReactIcon from "../techIcons/ReactIcon";
import TypescriptIcon from "../techIcons/TypescriptIcon";
import "./IconTooltip.scss";

interface Props {
  techStack: string;
}

const IconTooltip = ({ techStack }: Props) => {
  const getIcon = () => {
    switch (techStack) {
      case TechStack.react:
        return <ReactIcon />;
      case TechStack.typescript:
        return <TypescriptIcon />;
      case TechStack.csharp:
        return <CsharpIcon />;
      case TechStack.css:
        return <CssIcon />;
      case TechStack.kubernetes:
        return <KubernetesIcon />;
      case TechStack.docker:
        return <DockerIcon />;
      case TechStack.php:
        return <PhpIcon />;
      default:
        return <></>;
    }
  };

  return (
    <div className="tooltip">
      {getIcon()}
      <span className="tooltip__text">{techStack}</span>
    </div>
  );
};

export default IconTooltip;
