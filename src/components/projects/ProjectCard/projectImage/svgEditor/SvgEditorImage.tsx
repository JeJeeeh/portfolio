import { useEffect, useRef, useState } from "react";
import "./SvgEditorImage.scss";

interface Props {
  playAnimation: boolean;
  reset: boolean;
}

const SvgEditorImage = ({ playAnimation, reset }: Props) => {
  const [topPoint, setTopPoint] = useState<{ x: number; y: number }>({
    x: 150,
    y: 20,
  });
  const [leftPoint, setLeftPoint] = useState<{ x: number; y: number }>({
    x: 20,
    y: 280,
  });
  const [rightPoint, setRightPoint] = useState<{ x: number; y: number }>({
    x: 280,
    y: 280,
  });
  const [cursorPoint, setCursorPoint] = useState<{ x: number; y: number }>({
    x: 20,
    y: 20,
  });

  const cursorPointRef = useRef(cursorPoint);
  const topPointRef = useRef(topPoint);
  const leftPointRef = useRef(leftPoint);
  const rightPointRef = useRef(rightPoint);
  const stepRef = useRef(0);

  useEffect(() => {
    cursorPointRef.current = cursorPoint;
  }, [cursorPoint]);

  useEffect(() => {
    topPointRef.current = topPoint;
  }, [topPoint]);

  useEffect(() => {
    leftPointRef.current = leftPoint;
  }, [leftPoint]);

  useEffect(() => {
    rightPointRef.current = rightPoint;
  }, [rightPoint]);

  const steps = [
    {
      type: "move",
      x: 150,
      y: 20,
    },
    {
      type: "drag",
      target: "top",
      x: 250,
      y: 80,
    },
    {
      type: "move",
      x: 280,
      y: 280,
    },
    {
      type: "drag",
      target: "right",
      x: 200,
      y: 200,
    },
    {
      type: "move",
      x: 20,
      y: 280,
    },
    {
      type: "drag",
      target: "left",
      x: 150,
      y: 20,
    },
    {
      type: "move",
      x: 250,
      y: 80,
    },
    {
      type: "drag",
      target: "top",
      x: 280,
      y: 280,
    },
    {
      type: "move",
      x: 200,
      y: 200,
    },
    {
      type: "drag",
      target: "right",
      x: 20,
      y: 280,
    },
    {
      type: "move",
      x: 20,
      y: 20,
    },
  ];

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const animateStep = (
      step: { type: string; x: number; y: number; target?: string },
      duration: number
    ) => {
      const fps = 60;
      const interval = 1000 / fps;
      const frames = Math.ceil(duration / interval);

      const cursorDeltaX = (step.x - cursorPointRef.current.x) / frames;
      const cursorDeltaY = (step.y - cursorPointRef.current.y) / frames;

      let targetRef: React.MutableRefObject<{ x: number; y: number }> | null =
        null;
      let setTargetPoint: React.Dispatch<
        React.SetStateAction<{ x: number; y: number }>
      > | null = null;

      if (step.type === "drag" && step.target) {
        if (step.target === "top") {
          targetRef = topPointRef;
          setTargetPoint = setTopPoint;
        } else if (step.target === "left") {
          targetRef = leftPointRef;
          setTargetPoint = setLeftPoint;
        } else if (step.target === "right") {
          targetRef = rightPointRef;
          setTargetPoint = setRightPoint;
        }
      }

      const targetDeltaX = targetRef
        ? (step.x - targetRef.current.x) / frames
        : 0;
      const targetDeltaY = targetRef
        ? (step.y - targetRef.current.y) / frames
        : 0;

      let currentFrame = 0;

      intervalId = setInterval(() => {
        currentFrame++;

        const newCursorX = cursorPointRef.current.x + cursorDeltaX;
        const newCursorY = cursorPointRef.current.y + cursorDeltaY;

        setCursorPoint({ x: newCursorX, y: newCursorY });
        cursorPointRef.current = { x: newCursorX, y: newCursorY };

        if (targetRef && setTargetPoint) {
          const newTargetX = targetRef.current.x + targetDeltaX;
          const newTargetY = targetRef.current.y + targetDeltaY;

          setTargetPoint({ x: newTargetX, y: newTargetY });
          targetRef.current = { x: newTargetX, y: newTargetY };
        }

        if (currentFrame >= frames) {
          clearInterval(intervalId!);

          setCursorPoint({ x: step.x, y: step.y });
          cursorPointRef.current = { x: step.x, y: step.y };

          if (targetRef && setTargetPoint) {
            setTargetPoint({ x: step.x, y: step.y });
            targetRef.current = { x: step.x, y: step.y };
          }

          stepRef.current++;
          if (stepRef.current < steps.length) {
            timeoutId = setTimeout(
              () => animateStep(steps[stepRef.current], 1000),
              500
            );
          }
        }
      }, interval);
    };

    if (playAnimation) {
      if (stepRef.current >= steps.length) {
        stepRef.current = 0;
        setTopPoint({ x: 150, y: 20 });
        setRightPoint({ x: 280, y: 280 });
        setLeftPoint({ x: 20, y: 280 });
      }
      animateStep(steps[stepRef.current], 1000);
    } else {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    }

    // Cleanup when the component unmounts or `playAnimation` changes
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [playAnimation]);

  useEffect(() => {
    if (reset) {
      stepRef.current = 0;
      setTopPoint({ x: 150, y: 20 });
      setRightPoint({ x: 280, y: 280 });
      setLeftPoint({ x: 20, y: 280 });
      setCursorPoint({ x: 20, y: 20 });
    }
  }, [reset]);

  const cursor = (x: number = 0, y: number = 0) => (
    <path
      d="M1.4 19.4L0.2 5.6C0.0 2.2 3.8 0.0 6.4 2.0L17.8 9.8C21.2 12.2 19.4 17.4 15.2 17.2L13.6 17.0C12.0 16.8 10.4 17.8 9.6 19.2L9.0 20.8C7.2 24.4 1.8 23.4 1.4 19.4Z"
      transform={`translate(${x} ${y})`}
      className="svgEditor__cursor"
    />
  );

  return (
    <svg className="svgEditor" viewBox="0 0 300 300" width="100%" height="100%">
      <path
        d={`M ${leftPoint.x} ${leftPoint.y} L ${topPoint.x} ${topPoint.y} L ${rightPoint.x} ${rightPoint.y} Z`}
      />
      {/* left point */}
      <circle
        className="svgEditor__dot"
        cx={leftPoint.x}
        cy={leftPoint.y}
        r={10}
      />
      {/* top point */}
      <circle
        className="svgEditor__dot"
        cx={topPoint.x}
        cy={topPoint.y}
        r={10}
      />
      {/* right point */}
      <circle
        className="svgEditor__dot"
        cx={rightPoint.x}
        cy={rightPoint.y}
        r={10}
      />

      {cursor(cursorPoint.x, cursorPoint.y)}
    </svg>
  );
};

export default SvgEditorImage;
