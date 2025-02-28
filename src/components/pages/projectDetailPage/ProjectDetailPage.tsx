import { Link, useNavigate, useParams } from "react-router";
import { ProjectData, projectsData } from "../../../data/projects";
import { useEffect, useState } from "react";
import "./ProjectDetailPage.scss";
import IconTooltip from "../../icons/IconTooltip/IconTooltip";

const ProjectDetailPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (slug) {
      const tempProjectData = projectsData[slug];
      if (!tempProjectData) navigate("/projects");
      setProjectData(tempProjectData);
    }
  }, [slug]);

  return (
    <div className="projectDetailsPage">
      <Link to={"/projects"}>
        <div className="back">&lt; Back</div>
      </Link>
      <div className="content">
        <div className="projectDetailImage"></div>
        {projectData && (
          <div className="projectDetailInfo">
            <div className="title">{projectData.title}</div>
            <div className="details">
              <div className="location">
                {projectData.client && `${projectData.client}, `}
                {projectData.city && `${projectData.city}, `}
                {projectData.country && `${projectData.country} `}
              </div>
            </div>
            <div className="techStacks">
              {projectData.techStacks.map((techStack, index) => (
                <IconTooltip key={index} techStack={techStack} />
              ))}
            </div>
            <div className="description">{projectData.description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
