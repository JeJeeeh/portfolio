import KitchenwaresImage from "./kitchenwares/KitchenwaresImage";
import "./ProjectImage.scss";
import SvgEditorImage from "./svgEditor/SvgEditorImage";

interface Props {
  slug: string;
  playAnimation: boolean;
  reset: boolean;
}

const ProjectImage = ({ slug, playAnimation, reset }: Props) => {
  const getImage = (slug: string) => {
    switch (slug) {
      case "svg-editor-in-template-designer":
        return <SvgEditorImage playAnimation={playAnimation} reset={reset} />;
      case "kitchenwares":
        return <KitchenwaresImage />;
      default:
        return <div></div>;
    }
  };

  return <div className="projectImage">{getImage(slug)}</div>;
};

export default ProjectImage;
