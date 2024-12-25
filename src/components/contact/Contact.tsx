import SectionTitle from "../shared/sectionTitle/SectionTitle";
import "./Contact.scss";

const Contact = () => {
  const titleData = {
    title: "Contact",
  };

  return (
    <div className="contact">
      <SectionTitle {...titleData} />
    </div>
  );
};

export default Contact;
