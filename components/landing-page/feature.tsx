import { features } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import BorderGradient from "../ui/border-gradient";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type FeatureType = (typeof features)[number];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const backgroundVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,

    transition: {
      duration: 0.5,
    },
  },
};

const Feature = ({
  title,
  subtitle,
  description,
  icon,
  backgroundImage,
}: FeatureType) => {
  const conditionalClasses =
    title === "GPT 4 Integration"
      ? "from-pink-500 to-purple-700"
      : title === "Wolfram Alpha"
      ? "from-yellow-600 to-orange-700"
      : "";

  const conditionalIconColors =
    title === "GPT 4 Integration"
      ? "text-purple-500"
      : title === "Wolfram Alpha"
      ? "text-orange-600"
      : "";
  return (
    <>
      <motion.li variants={variants} className="relative">
        <motion.div
          initial="initial"
          whileHover="hover"
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            variants={backgroundVariants}
            className="absolute inset-0 w-full h-full bg-cover rounded-md overflow-hidden"
            style={{
              backgroundImage: backgroundImage,
            }}
          />
        </motion.div>
        <Image
          src="/gradient.png"
          alt="gradient"
          width={600}
          height={500}
          className="absolute top-1/2 -translate-y-1/2 -z-20 "
        />
        <BorderGradient className={conditionalClasses}>
          <Card className="max-w-[24rem]">
            <CardHeader className="flex flex-row items-center justify-center space-x-2 ">
              <CardTitle>{title}</CardTitle>
              <span className={`${conditionalIconColors || ""} text-2xl`}>
                {icon}
              </span>
            </CardHeader>
            <CardDescription className="text-pretty text-center px-4">
              {subtitle}
            </CardDescription>
            <CardContent className="pt-2 text-pretty text-center">
              {description}
            </CardContent>
          </Card>
        </BorderGradient>
      </motion.li>
    </>
  );
};

export default Feature;
