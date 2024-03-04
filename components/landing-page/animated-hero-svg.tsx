"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  hidden: { pathLength: 0 },
  animate: {
    opacity: 1,
    transition: {
      pathLength: 1,
      stroke: "black",
      duration: 10,
      ease: "easeInOut",
    },
  },
};

const AnimatedHeroSvg = () => {
  const [scope, animate] = useAnimate();
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);

  useEffect(() => {
    const handleInitialAnimation = async () => {
      await animate(
        "#path1",
        {
          pathLength: [0, 1],
          stroke: "black",
        },
        {
          duration: 10,
          ease: "easeInOut",
          onComplete: () => setIsInitialAnimationDone(true),
        }
      );
    };
    handleInitialAnimation();
  }, [animate]);

  //   useEffect(() => {
  //     if (!isInitialAnimationDone) return;

  //     // Start tracing after the initial animation is done
  //     const handleRepeatAnimation = async () => {
  //       // Ensure path2 is initially invisible or matches the background
  //       await animate(
  //         "#path2",
  //         {
  //           pathLength: [0.001],
  //           pathOffset: [0, 0.4],
  //           stroke: 'url("#gradient1")',
  //           strokeWidth: [0.5],
  //         },
  //         {
  //           duration: 30,
  //           //   duration: 10, // Duration of the tracing effect
  //           // Easing for a smooth animation
  //           repeat: Infinity, // Repeat the animation indefinitely
  //           //   onComplete: () => handleRepeatAnimation(),
  //         }
  //       );
  //     };

  //     handleRepeatAnimation();
  //   }, [scope, animate, isInitialAnimationDone]);

  return (
    <svg
      ref={scope}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="152"
      viewBox="0 0 152 152"
      className="h-full mx-auto"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "cyan", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "magenta", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <motion.g fill="none" stroke="black" strokeWidth="0.5">
        <motion.path
          variants={variants}
          animate="animate"
          initial="hidden"
          id="path1"
          d="M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z"
        />
      </motion.g>
      {/* <motion.g fill="none" stroke="black" strokeWidth="0.5">
        <path
          id="path2"
          d="M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z"
          strokeDasharray="1"
          strokeDashoffset="0"
          strokeLinejoin="round"
        />
      </motion.g> */}
    </svg>
  );
};

export default AnimatedHeroSvg;
