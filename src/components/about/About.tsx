import SectionTitle from "../shared/sectionTitle/SectionTitle";
import portrait from "../../assets/portrait.jpg";
import "./About.scss";

const About = () => {
  const titleData = {
    title: "About Me",
  };

  return (
    <div className="about">
      <SectionTitle {...titleData} />
      <div className="about__container">
        <div className="about__left">
          <div className="about__left__content">
            <div>
              Hi, my name is Jason Jonathan Effendi and I am from Indonesia!
            </div>
            <div>
              I became a software engineer because I love creating and solving
            </div>
            <div>problems.</div>
            <div>
              One of my goals in life is to help people with their creative
              ideas to
            </div>
            <div>come to life.</div>
            <div className="about__left__accent">
              I am excited about the chance to make positive impacts through
            </div>
            <div className="about__left__accent">Technology!</div>
          </div>
          <div className="about__left__small">
            <div>Here are some things that I enjoy when I am not working</div>
          </div>
          <div className="about__left__container">
            <div className="about__left__container__item" />
            <div className="about__left__container__item" />
            <div className="about__left__container__item" />
            <div className="about__left__container__item" />
            <div className="about__left__container__item" />
          </div>
          <div className="about__left__small about__left__clickable">
            <div>&lt;Click me for more information!&gt;</div>
          </div>
        </div>
        <img className="about__right" src={portrait} alt="" />
      </div>
    </div>
  );
};

export default About;
