import "./SectionTitle.scss";

interface Props {
  title: string;
  body?: string[];
}

const SectionTitle = ({ title, body }: Props) => {
  return (
    <div className="section">
      <div className="section__title">{title}</div>
      <div className="section__body">
        {body &&
          body.length &&
          body.map((bodyItem, index) => <div key={index}>{bodyItem}</div>)}
      </div>
    </div>
  );
};

export default SectionTitle;
