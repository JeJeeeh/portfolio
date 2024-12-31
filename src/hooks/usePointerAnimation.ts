import { useEffect, useRef } from "react";

const usePointerAnimation = (
  steps: { x: number; y: number }[],
  playAnimation: boolean
) => {
  const cursorRef = useRef({ x: 0, y: 0 }); // Ref to track the current cursor position
  const stepIndexRef = useRef(0); // Ref to track the current step index
  const animationFrameRef = useRef<number | null>(null); // Ref to track the animation frame ID

  const animateStep = (
    from: { x: number; y: number },
    to: { x: number; y: number },
    duration: number
  ) => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is between 0 and 1

      // Calculate the new position using linear interpolation
      const newX = from.x + (to.x - from.x) * progress;
      const newY = from.y + (to.y - from.y) * progress;

      // Update the cursor position
      cursorRef.current = { x: newX, y: newY };

      if (progress < 1) {
        // Continue animating
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Move to the next step
        stepIndexRef.current++;
        if (stepIndexRef.current < steps.length) {
          animateStep(to, steps[stepIndexRef.current], 1000); // Start the next step
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (playAnimation && steps.length > 0) {
      stepIndexRef.current = 0; // Reset to the first step
      animateStep(cursorRef.current, steps[0], 1000); // Start the animation
    }

    // Cleanup any ongoing animation frame
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [playAnimation, steps]);

  return cursorRef;
};

export default usePointerAnimation;
