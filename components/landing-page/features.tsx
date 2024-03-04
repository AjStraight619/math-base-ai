"use client";

import { features } from "@/lib/data";
import { motion } from "framer-motion";
import Feature from "./feature";
import SectionHeading from "./section";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Features = () => {
  return (
    <section className="mb-28">
      <SectionHeading>Features</SectionHeading>
      <motion.ul
        variants={variants}
        animate="visible"
        initial="hidden"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </motion.ul>
    </section>
  );
};

export default Features;
