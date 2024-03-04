"use client";

import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const TestTrace = () => {
  const [scope, animate] = useAnimate();
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);

  useEffect(() => {
    const handleInitialAnimation = async () => {
      await animate(
        "#path1",
        {
          pathLength: [0, 1],
          opacity: [0.5, 1],
          stroke: "black",
        },
        {
          duration: 5,
          ease: "easeInOut",
          onComplete: () => setIsInitialAnimationDone(true),
        }
      );
    };
    handleInitialAnimation();
  }, [animate]);

  useEffect(() => {
    if (!isInitialAnimationDone) return;
    const handleAnimation = async () => {
      await animate(
        "#path2",
        {
          pathLength: [0.01],
          pathOffset: [0, 1],
          strokeOpacity: [1, 0.5],
          stroke: "cyan",
        },
        {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }
      );
    };
    handleAnimation();
  }, [scope, animate, isInitialAnimationDone]);
  return (
    <svg
      ref={scope}
      width="485"
      height="238"
      viewBox="0 0 485 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="path1"
        d="M1 1H484V237L195 88L387 42L313 237L88 183L1 1Z"
        stroke="black"
      />
      <path
        id="path2"
        d="M1 1H484V237L195 88L387 42L313 237L88 183L1 1Z"
        stroke="black"
        strokeOpacity="0"
      />
    </svg>
  );
};

export default TestTrace;
