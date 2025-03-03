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
    const imageProps = {
      playAnimation: playAnimation,
      reset: reset,
    };

    switch (slug) {
      case "svg-editor-in-template-designer":
        return <SvgEditorImage {...imageProps} />;
      case "kitchenwares":
        return <KitchenwaresImage {...imageProps} />;
      default:
        return <div></div>;
    }
  };

  return <div className="projectImage">{getImage(slug)}</div>;
};

export default ProjectImage;
