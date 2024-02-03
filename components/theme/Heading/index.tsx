"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
export function Heading({ children }: { children: React.ReactNode }) {
  const animation = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.4,
    },
  };
  return (
    <div className="h-100lvh fixed inset-0 -z-10 flex items-end overflow-hidden px-6 pb-[6.66%] xl:px-8">
      <motion.h1
        className="text-responsive-heading flex w-full items-end font-medium leading-none text-primary"
        {...animation}
      >
        {children}
        <ArrowDown
          className="ml-auto"
          size={34}
        />
      </motion.h1>
    </div>
  );
}
