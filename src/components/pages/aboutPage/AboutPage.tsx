import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import { techStacks, tools } from "../../../data/projects";
import { testimonialsData } from "../../../data/testimonials";
import TestimonialCard from "./testimonials/TestimonialCard";
import heroPortrait from "../../../assets/portrait.jpg";
import "./AboutPage.scss";
import GameIcon from "../../icons/aboutIcons/GameIcon";
import MusicIcon from "../../icons/aboutIcons/MusicIcon";
import GymIcon from "../../icons/aboutIcons/GymIcon";
import CookingIcon from "../../icons/aboutIcons/CookingIcon";

const AboutPage = () => {
  const titleData = {
    title: "About Me",
  };

  return (
    <div className="aboutPage">
      <SectionTitle {...titleData} />
      <div className="pageContainer">
        <div className="aboutContainer">
          <img src={heroPortrait} alt="Portrait" className="portrait" />
          <div className="aboutDescription">
            <div className="aboutDescriptionContainer">
              <div className="aboutDescriptionHeader">
                Hi, I'm Jason Jonathan Effendi
              </div>
              <div>
                A software engineer with a passion for building and
                problem-solving. I thrive on turning ideas into reality through
                clean, efficient code and intuitive user experiences.
              </div>
              <div>
                My goal is to help people bring their creative ideas to life by
                developing innovative and scalable solutions. Whether it's
                crafting interactive applications or optimizing performance, I
                love the challenge of making technology work seamlessly for
                users.
              </div>
              <div>
                I'm always eager to learn, collaborate, and create meaningful
                impact through technology. Let’s build something amazing
                together!
              </div>
            </div>
            <hr />
            <div className="aboutHobbiesContainer">
              <div className="aboutHobbiesDescription">
                Beyond coding, here are other things that I enjoy
              </div>
              <div className="aboutHobbiesCardContainer">
                <div className="hobbyCard">
                  <GameIcon />
                  <div>Gaming</div>
                </div>
                <div className="hobbyCard">
                  <CookingIcon />
                  <div>Cooking</div>
                </div>
                <div className="hobbyCard">
                  <GymIcon />
                  <div>Gym</div>
                </div>
                <div className="hobbyCard">
                  <MusicIcon />
                  <div>Music</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutItemsContainer">
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
        <div className="aboutItemsContainer">
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
