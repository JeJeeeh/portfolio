import { useEffect } from "react";
import "./KitchenwaresImage.scss";

interface Props {
  playAnimation: boolean;
  reset: boolean;
}

const KitchenwaresImage = ({ playAnimation, reset }: Props) => {
  const steps = [
    {
      target: "left",
      color: "red",
    },
    {
      target: "middle",
      color: "salmon",
    },
  ];

  useEffect(() => {
    // animation play login
  }, [playAnimation]);

  useEffect(() => {
    if (reset) {
      // reset logic
    }
  }, []);

  return (
    <svg
      className="kitchenwares"
      viewBox="0 0 300 300"
      width="100%"
      height="100%"
    >
      {/* lines */}
      <polyline className="kitchenwares__line" points="55,110 55,150 150,150" />
      <line
        className="kitchenwares__line"
        x1={150}
        y1={110}
        x2={150}
        y2={150}
      />
      <polyline
        className="kitchenwares__line"
        points="245,110 245,150 150,150"
      />
      <line
        className="kitchenwares__line"
        x1={150}
        y1={190}
        x2={150}
        y2={150}
      />
      {/* animated lines */}
      <polyline className="animated-line" points="150,170 150,150 120,150" />
      {/* top boxes */}
      <rect
        className="kitchenwares__rect"
        x={20}
        y={10}
        width={70}
        height={100}
        rx={10}
        ry={10}
      />
      <rect
        className="kitchenwares__rect"
        x={115}
        y={10}
        width={70}
        height={100}
        rx={10}
        ry={10}
      />
      <rect
        className="kitchenwares__rect"
        x={210}
        y={10}
        width={70}
        height={100}
        rx={10}
        ry={10}
      />

      {/* botom box */}
      <rect
        className="kitchenwares__rect"
        x={115}
        y={190}
        width={70}
        height={100}
        rx={10}
        ry={10}
      />
    </svg>
  );
};

export default KitchenwaresImage;
