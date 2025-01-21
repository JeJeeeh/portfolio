import { TechStack } from "../../../data/projects";
import CplusIcon from "../techIcons/CplusIcon";
import CsharpIcon from "../techIcons/CsharpIcon";
import CssIcon from "../techIcons/CssIcon";
import DockerIcon from "../techIcons/DockerIcon";
import ExpressIcon from "../techIcons/ExpressIcon";
import JavaIcon from "../techIcons/JavaIcon";
import KubernetesIcon from "../techIcons/KubernetesIcon";
import MySqlIcon from "../techIcons/MySqlIcon";
import NodeIcon from "../techIcons/NodeIcon";
import PhpIcon from "../techIcons/PhpIcon";
import PrismaIcon from "../techIcons/PrismaIcon";
import ReactIcon from "../techIcons/ReactIcon";
import TypescriptIcon from "../techIcons/TypescriptIcon";
import "./IconTooltip.scss";

interface Props {
  techStack: string;
  withTooltip?: boolean;
}

const IconTooltip = ({ techStack, withTooltip = true }: Props) => {
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
      case TechStack.java:
        return <JavaIcon />;
      case TechStack.node:
        return <NodeIcon />;
      case TechStack.cplus:
        return <CplusIcon />;
      case TechStack.prisma:
        return <PrismaIcon />;
      case TechStack.express:
        return <ExpressIcon />;
      case TechStack.mysql:
        return <MySqlIcon />;
      default:
        return <></>;
    }
  };

  return (
    <div className="tooltip">
      {getIcon()}
      {withTooltip && <span className="tooltip__text">{techStack}</span>}
    </div>
  );
};

export default IconTooltip;
