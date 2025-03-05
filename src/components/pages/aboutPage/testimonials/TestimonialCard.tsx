import { Link } from "react-router";
import { Testimonials } from "../../../../data/testimonials";
import "./TestimonialCard.scss";

interface Props {
  testimonial: Testimonials;
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="testimonialCard">
      {testimonial.imageUrl ? (
        <img className="cardProfile" src={testimonial.imageUrl} />
      ) : (
        <div className="cardProfile" />
      )}

      <div className="cardInfo">
        {testimonial.link && (
          <Link to={testimonial.link}>
            <div className="cardName cardName__link">{testimonial.name}</div>
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
        <hr className="cardDivider" />
        <div className="cardDescription">
          {testimonial.body.map((body, index) => (
            <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{body}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
