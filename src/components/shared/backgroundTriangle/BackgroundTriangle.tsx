import "./BackgroundTriangle.scss";

const BackgroundTriangle = () => {
  return (
    <svg
      className={"backgroundTriangle"}
      viewBox="0 0 700 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 200 L600 0 L700 50 V200 Z" />
    </svg>
  );
};

export default BackgroundTriangle;
