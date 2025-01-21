import { projectsData } from "../../../data/projects";
import About from "../../about/About";
import Contact from "../../contact/Contact";
import Hero from "../../hero/Hero";
import Projects from "../../projects/Projects";
import Skills from "../../skills/Skills";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills projectsData={projectsData} />
      <Projects projectsData={projectsData} />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
