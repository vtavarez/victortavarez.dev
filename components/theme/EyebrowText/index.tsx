"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function EyebrowText({ text, cta }: { text: string; cta?: string }) {
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
      duration: 1,
      ease: [0.96, 0.085, 0.0, 0.695],
    },
  };
  return (
    <motion.div
      className="flex flex-row justify-between py-8 text-lg xl:py-16"
      {...animation}
    >
      <div className="font-medium">({text})</div>
      {Boolean(cta) && (
        <div className="flex flex-row gap-1 font-medium">
          {cta}
          <ArrowDown />
        </div>
      )}
    </motion.div>
  );
}
