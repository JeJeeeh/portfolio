import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import "./AboutPage.scss";
import { techStacks, tools } from "../../../data/projects";

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
        {/* <div className="testimonialsContainer">
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
              <div className="testimonialCard" key={index}>
                <div className="cardProfile"></div>
                <div className="cardInfo">
                  {testimonial.link && (
                    <Link to={testimonial.link}>
                      <div className="cardName cardName__link">
                        {testimonial.name}
                      </div>
                    </Link>
                  )}
                  {!testimonial.link && (
                    <div className="cardName">{testimonial.name}</div>
                  )}
                  <div className="cardPosition">
                    {testimonial.role} @{" "}
                    <Link to={testimonial.company.link}>
                      <span className="link">{testimonial.company.name}</span>
                    </Link>
                  </div>
                  <div className="cardDescription">{testimonial.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
