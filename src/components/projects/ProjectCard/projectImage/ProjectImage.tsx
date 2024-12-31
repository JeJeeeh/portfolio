import "./ProjectImage.scss";
import SvgEditorImage from "./svgEditor/SvgEditorImage";

interface Props {
  slug: string;
  playAnimation: boolean;
}

const ProjectImage = ({ slug, playAnimation }: Props) => {
  const getImage = (slug: string) => {
    switch (slug) {
      case "svg-editor-in-template-designer":
        return <SvgEditorImage playAnimation={playAnimation} />;
      default:
        return <div></div>;
    }
  };

  return <div className="projectImage">{getImage(slug)}</div>;
};

export default ProjectImage;
