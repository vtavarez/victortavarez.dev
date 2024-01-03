"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function EyebrowText(): JSX.Element {
  const animation = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      type: "spring",
      duration: 0.5,
      damping: 10,
      stiffness: 100,
      delay: 1.2,
    },
  };
  return (
    <motion.div
      className="mb-8 mt-16 flex flex-row justify-between text-lg"
      {...animation}
    >
      <div className="font-medium">(Selected work)</div>
      <div className="flex flex-row gap-1 font-medium">
        Discover <ArrowDown />
      </div>
    </motion.div>
  );
}
