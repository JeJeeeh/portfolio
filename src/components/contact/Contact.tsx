import { Parallax } from "react-scroll-parallax";
import MailIcon from "../icons/MailIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import SectionTitle from "../shared/sectionTitle/SectionTitle";
import "./Contact.scss";

const Contact = () => {
  const titleData = {
    title: "Contact",
  };

  return (
    <Parallax className="contact" opacity={[0, 1]} easing={[0.24, 1, 0.4, 1]}>
      <SectionTitle {...titleData} />
      <div className="contact__container">
        <div className="contact__content">
          <div>
            I'd love to hear from you! Whether you want to collaborate, have a
          </div>
          <div>
            question, or just want to say hello, feel free to reach out.
          </div>
        </div>
        <div className="contact__info">
          <div className="contact__info__title">Direct contact info</div>
          <div className="contact__info__container">
            <div className="contact__info__item">
              <MailIcon color="black" />
              Email: jasonjonathaneffendi@gmail.com
            </div>
            <div className="contact__info__item">
              <WhatsappIcon color="black" />
              Whatsapp: (+31) 639717225
            </div>
          </div>
        </div>
        <div className="contact__content">
          Let's create something amazing together. I look forward connecting
          with you!
        </div>
      </div>
    </Parallax>
  );
};

export default Contact;
