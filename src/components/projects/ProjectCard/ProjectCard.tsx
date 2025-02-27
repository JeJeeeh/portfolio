import { useEffect, useRef, useState } from "react";
import { TechStack } from "../../../data/projects";
import IconTooltip from "../../icons/IconTooltip/IconTooltip";
import "./ProjectCard.scss";
import ProjectImage from "./projectImage/ProjectImage";
import { Link } from "react-router";

interface Props {
  title: string;
  techStacks: TechStack[];
  description: string;
  slug: string;
  link: string;
}

const ProjectCard = ({ title, techStacks, description, slug, link }: Props) => {
  const projectCardRef = useRef<HTMLDivElement | null>(null);
  const [parentOpacity, setParentOpacity] = useState<number>(0);

  useEffect(() => {
    let observer: MutationObserver;

    if (projectCardRef.current) {
      const parentElement = projectCardRef.current.parentElement;

      if (parentElement) {
        const updateOpacity = () => {
          const computedStyle = window.getComputedStyle(parentElement);
          setParentOpacity(parseFloat(computedStyle.opacity));
        };

        // Initialize opacity
        updateOpacity();

        // Observe changes to the parent's style
        observer = new MutationObserver(() => {
          updateOpacity();
        });

        observer.observe(parentElement, {
          attributes: true,
          attributeFilter: ["style"],
        });
      }
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className={`projectCardDisplay`} ref={projectCardRef}>
      <div className="projectCardDisplay__display">
        <ProjectImage
          slug={slug}
          playAnimation={parentOpacity > 0.9 ? true : false}
          reset={parentOpacity === 0 ? true : false}
        />
      </div>
      <div className="projectCardDisplay__info">
        <div className="projectCardDisplay__info__top">
          <div className="projectCardDisplay__info__title">{title}</div>
          <div className="projectCardDisplay__info__tech">
            {techStacks.map((techStack, index) => (
              <IconTooltip key={index} techStack={techStack} />
            ))}
          </div>
          <div className="projectCardDisplay__info__desc">{description}</div>
        </div>
        {/* <div className="projectCardDisplay__info__detail">
          <Link to={link}>
            <div className="projectCardDisplay__info__button">See more</div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
