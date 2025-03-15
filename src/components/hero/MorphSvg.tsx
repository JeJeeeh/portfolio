import anime from "animejs";
import { useEffect } from "react";
import "./MorphSvg.scss";

const MorphSvg = () => {
  useEffect(() => {
    anime({
      targets: "#morph .lines path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (_el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <svg viewBox="104 22 165 63" id="morph">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="black"
        strokeWidth="1"
        className="lines"
      >
        <path
          className="el"
          d="M118 80V49.77C118.5 33.23 131.58 20 148 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15z"
          transform="rotate(90,140,45)"
        ></path>
        <path
          className="el"
          d="M133 65a15 15 0 0 1-15-15v-7.5h-15V50a30 30 0 0 0 30 30V65zm30 15V49.77C163.5 33.23 176.58 20 193 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15z"
          transform="rotate(90,190,50)"
        ></path>
        <path
          className="el"
          d="M238 65a15 15 0 0 1 0-30c8.1 0 14.63 6.53 15 15h-15v15h30V49.89C267.5 33.23 254.42 20 238 20a30 30 0 0 0 0 60V65z"
          transform="translate(0 3)"
        ></path>
        <path
          className="el"
          d="M260.48 65a7.5 7.5 0 1 1-7.48 8v-1c.26-3.9 3.5-7 7.48-7z"
          transform="translate(0 3)"
        ></path>
      </g>
    </svg>
  );
};

export default MorphSvg;
