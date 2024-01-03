"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import masimo from "@/public/masimo.png";

export function Project({
  image,
  summery,
  client,
  link,
  date,
}: {
  image: string;
  summery: string;
  client: string;
  link: string;
  date: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);

  const animation = {
    initial: {
      opacity: 0,
      y: 10,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
    },
    transition: {
      type: "spring",
      duration: 0.5,
      damping: 10,
      stiffness: 100,
      delay: 1.5,
    },
  };

  return (
    <motion.div
      className="relative mb-8"
      {...animation}
      ref={ref}
    >
      <div className="group relative flex h-[720px] max-h-full w-[1650px] max-w-full items-center justify-center overflow-hidden rounded-lg shadow-project">
        <motion.div
          className="h-full w-full transition-all duration-500"
          style={{
            y: imageY,
          }}
        >
          <Image
            className="absolute inset-0 h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
            src={masimo.src}
            width={1650}
            height={720}
            alt="panel"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 z-10 transition-all duration-500 group-hover:bg-white/40"></div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-12">
        <div className="text-lg font-medium">Masimo</div>
        <div className="text-lg font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          maxime, voluptatum totam ut iste quaerat quis.
        </div>
        <div className="text-right text-lg font-medium">(2022)</div>
      </div>
    </motion.div>
  );
}
