/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section";

const WhyMathBase = () => {
  // Define your animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  return (
    <section className="mb-20 mt-40">
      <SectionHeading>Why Math Base?</SectionHeading>
      <motion.p
        className="text-center font-mono text-lg leading-6 tracking-wide mt-4 sm:max-w-2xl dark:text-white/70 text-gray-950/80 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Math Base uniquely combines Chat GPT's conversational AI with Wolfram
        Alpha's computational intelligence, creating a synergistic tool for math
        learning. This integration provides intuitive explanations and precise
        problem-solving capabilities, making complex mathematical concepts more
        accessible and understandable. It's an innovative approach that enhances
        engagement and learning efficiency, offering students a dynamic and
        responsive educational experience.
      </motion.p>
    </section>
  );
};

export default WhyMathBase;
