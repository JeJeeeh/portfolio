import "./SectionTitle.scss";

interface Props {
  title: string;
  body?: string[];
}

const SectionTitle = ({ title, body }: Props) => {
  return (
    <div className={`section`}>
      <div className="title">{title}</div>
      <div className="body">
        {body &&
          body.length > 0 &&
          body.map((bodyItem, index) => <div key={index}>{bodyItem}</div>)}
      </div>
    </div>
  );
};

export default SectionTitle;
