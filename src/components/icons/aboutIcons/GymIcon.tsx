import "./AboutIcons.scss";

const GymIcon = () => {
  return (
    <svg
      className="aboutIcon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {`.cls-1 {
            fill: none;
            stroke: #000000;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 1.5px;
          }`}
          </style>
        </defs>
        <g id="ic-sport-small-dumbbell">
          <rect
            className="cls-1"
            x="2"
            y="6"
            width="6"
            height="12"
            rx="2"
          ></rect>
          <rect
            className="cls-1"
            x="16"
            y="6"
            width="6"
            height="12"
            rx="2"
          ></rect>
          <line className="cls-1" x1="8" y1="10" x2="16" y2="10"></line>
          <line className="cls-1" x1="16" y1="14" x2="8" y2="14"></line>
        </g>
      </g>
    </svg>
  );
};

export default GymIcon;
