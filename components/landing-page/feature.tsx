import { features } from "@/lib/data";
import { motion } from "framer-motion";
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

const Feature = ({ title, subtitle, description, icon }: FeatureType) => {
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
    <motion.li
      whileHover={{
        scale: 1.05,
      }}
      variants={variants}
    >
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
  );
};

export default Feature;
