import { Parallax } from "react-scroll-parallax";
import SectionTitle from "../shared/sectionTitle/SectionTitle";
import ProjectCard, { TechStack } from "./ProjectCard/ProjectCard";
import "./Projects.scss";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const projectsData: {
    title: string;
    techStacks: TechStack[];
    description: string;
  }[] = [
    {
      title: "Project Title 1",
      techStacks: [TechStack.react, TechStack.typescript, TechStack.material],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse mollitia cupiditate quasi numquam rerum consequuntur nemo, ducimus, eos aliquam, et sequi. Adipisci doloribus nisi sapiente pariatur aperiam numquam at modi.",
    },
    {
      title: "Project Title 2",
      techStacks: [TechStack.react, TechStack.csharp],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse mollitia cupiditate quasi numquam rerum consequuntur nemo, ducimus, eos aliquam, et sequi. Adipisci doloribus nisi sapiente pariatur aperiam numquam at modi.",
    },
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [displayedBody, setDisplayedBody] = useState<string[]>([]);
  const [playAnimation, setPlayAnimation] = useState(false);

  const title = "[ ...Projects ]";
  const body = [
    "A collection of my most exciting and meaningful work, demonstrating",
    "innovation, problem-solving, and a drive to bring ideas to life",
  ];
  const delay = 200;
  const bodyDelay = 20;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (playAnimation) {
      let index = 0;
      let tempText = "";

      interval = setInterval(() => {
        if (index < title.length) {
          tempText += title[index];
          setDisplayedText(tempText);
          index++;
        } else {
          clearInterval(interval);
        }
      }, delay);
    }

    return () => clearInterval(interval);
  }, [title, delay, playAnimation]);

  let lineIndex = useRef(0);
  let charIndex = useRef(0);
  let tempBody = useRef(Array(body.length).fill(""));

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (playAnimation) {
      interval = setInterval(() => {
        if (lineIndex.current < body.length) {
          tempBody.current[lineIndex.current] = body[lineIndex.current].slice(
            0,
            charIndex.current + 1
          );

          setDisplayedBody([...tempBody.current]);

          charIndex.current++;

          // If the current line is fully typed, move to the next line
          if (charIndex.current >= body[lineIndex.current].length) {
            charIndex.current = 0;
            lineIndex.current++;
          }
        } else {
          clearInterval(interval);
        }
      }, bodyDelay);
    }

    return () => clearInterval(interval);
  }, [body, bodyDelay, playAnimation]);

  const titleData = {
    title: displayedText,
    body: displayedBody,
  };

  return (
    <div className="projects">
      <Parallax
        onProgressChange={(progress) => {
          if (progress > 0.7) setPlayAnimation(true);
        }}
      >
        <SectionTitle {...titleData} />
      </Parallax>
      {projectsData.map((projectData, index) => (
        <ProjectCard
          key={index}
          {...projectData}
          className={playAnimation ? "slideIn" : ""}
        />
      ))}
      <div className="projects__footer">&lt;See more projects here!&gt;</div>
    </div>
  );
};

export default Projects;
