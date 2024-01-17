"use client";
import { motion } from "framer-motion";

export function Headline({ children }: { children?: React.ReactNode }) {
  const animation = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
    },
    viewport: {
      once: true,
    },
    transition: {
      type: "ease",
      duration: 1.5,
      ease: [0.96, 0.085, 0.0, 0.695],
    },
  };
  return (
    <div className="overflow-hidden py-16">
      <motion.h2
        className="text-balanced text-xl"
        {...animation}
      >
        {children}
      </motion.h2>
    </div>
  );
}
