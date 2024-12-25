import "./TransitionTriangle.scss";

interface Props {
  id: string;
}

const TransitionTriangle = ({ id }: Props) => {
  return (
    <svg
      id={`triangle${id}`}
      className={`transitionTriangle ${
        id === "bottom"
          ? "transitionTriangle__rotated"
          : id === "footer"
          ? "transitionTriangle__inverted"
          : ""
      }`}
      viewBox="0 -2 700 62"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 60 L550 0 L700 20 V60 Z" />
    </svg>
  );
};

export default TransitionTriangle;
