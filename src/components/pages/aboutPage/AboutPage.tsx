import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import { techStacks, tools } from "../../../data/projects";
import { testimonialsData } from "../../../data/testimonials";
import "./AboutPage.scss";
import TestimonialCard from "./testimonials/TestimonialCard";

const AboutPage = () => {
  const titleData = {
    title: "About Me",
    body: [
      "Hi, my name is Jason! I'm a Front-end Developer dedicated to",
      "bring ideas to life with modern web technologies.",
      "Let's create something amazing together!",
    ],
  };

  return (
    <div className="aboutPage">
      <SectionTitle {...titleData} />
      <div className="pageContainer">
        <div className="aboutContainer">
          <div className="containerText">
            <div className="textTitle">Technologies</div>
            <div className="textDescription">
              These are the technologies I've utilizied to bring my projects to
              life
            </div>
          </div>
          <div className="containerItems">
            {techStacks.map((techStack, index) => (
              <div className="itemContainer" key={index}>
                <div className="itemDot"></div>
                {techStack}
              </div>
            ))}
          </div>
        </div>
        <div className="aboutContainer">
          <div className="containerItems">
            {tools.map((tool, index) => (
              <div className="itemContainer" key={index}>
                <div className="itemDot"></div>
                {tool}
              </div>
            ))}
          </div>
          <div className="containerText">
            <div className="textTitle">Tools</div>
            <div className="textDescription">
              These are the tools that I have used to help me bring the projects
              to life
            </div>
          </div>
        </div>
        <div className="testimonialsContainer">
          <div className="testimonialsText">
            <div className="textTitle">Testimonials</div>
            <div className="textDescription">
              <div>Here's what other have to say about working with me!</div>
              <div>
                These testimonials highlight my skills, dedication and impact
              </div>
              <div>I bring to projects.</div>
            </div>
          </div>
          <div className="testimonialCards">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
