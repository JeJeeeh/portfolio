import "./SectionTitle.scss";

interface Props {
  title: string;
  body?: string[];
  className?: string;
}

const SectionTitle = ({ title, body, className }: Props) => {
  return (
    <div className={`section ${className}`}>
      <div className="section__title">{title}</div>
      <div className="section__body">
        {body &&
          body.length > 0 &&
          body.map((bodyItem, index) => <div key={index}>{bodyItem}</div>)}
      </div>
    </div>
  );
};

export default SectionTitle;
