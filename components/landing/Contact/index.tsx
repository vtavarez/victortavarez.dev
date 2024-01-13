"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactForm } from "@/components/theme";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scroll = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div
      className="relative -mx-6 flex items-center justify-center overflow-hidden @container xl:-mx-16"
      ref={ref}
    >
      <ContactForm />
      <motion.div
        className="absolute inset-0 -z-10 -ml-6 text-[35cqw] font-semibold uppercase leading-[0.75] tracking-[-0.10em] opacity-50 xl:-ml-16"
        style={{ y: scroll }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i}>contact</div>
        ))}
      </motion.div>
    </div>
  );
}
