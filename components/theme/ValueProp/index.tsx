"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ValueProp({
  number,
  children,
  className,
  ...props
}: {
  number: string;
  children: string;
} & React.HTMLAttributes<HTMLDivElement>) {
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
      duration: 0.1,
      ease: "linear",
    },
  };

  return (
    <div
      className={cn("grid grid-cols-12 gap-4", className)}
      {...props}
    >
      <div className="col-span-12 text-lg font-medium leading-loose md:col-span-1">
        {"/" + number}
      </div>
      <div className="text-balance col-span-12 flex items-center justify-center text-left text-3xl font-medium md:col-span-11 lg:text-5xl">
        <p className="text-balance mb-5 max-w-3xl pl-3 leading-snug md:pl-0">
          {typeof children === "string" &&
            children.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                {...animation}
                transition={{ ...animation.transition, delay: i * 0.1 }}
              >
                {word + "\u00A0"}
              </motion.span>
            ))}
        </p>
      </div>
    </div>
  );
}
