import "./AboutIcons.scss";

const MusicIcon = () => {
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
            {`.cls-1, .cls-2 {
            fill: none;
            stroke: #000000;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 1.5px;
          }
          .cls-2 {
            fill-rule: evenodd;
          }`}
          </style>
        </defs>
        <g id="ic-media-note">
          <circle className="cls-1" cx="8" cy="16.94" r="2"></circle>
          <circle className="cls-1" cx="16" cy="14.94" r="2"></circle>
          <path
            className="cls-2"
            d="M10,16.94V9.06a.21.21,0,0,1,.11-.18l7.6-3.8a.2.2,0,0,1,.29.18v9.68"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default MusicIcon;
