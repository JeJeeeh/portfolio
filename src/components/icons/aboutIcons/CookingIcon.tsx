import "./AboutIcons.scss";

const CookingIcon = () => {
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
        <g id="ic-kitchen-pot">
          <path
            className="cls-1"
            d="M7,5H17a3,3,0,0,1,3,3V19a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V8A3,3,0,0,1,7,5Z"
          ></path>
          <line className="cls-1" x1="22" y1="8" x2="2" y2="8"></line>
          <path
            className="cls-1"
            d="M10,5V4a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2V5"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default CookingIcon;
