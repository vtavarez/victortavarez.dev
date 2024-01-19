"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReadMore } from "@/components/ui";
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
      className="grid h-[300px] max-h-full w-[820px] max-w-full grid-cols-12 gap-8 border-4 border-primary shadow-project"
      {...animation}
    >
      <div className="relative col-span-5">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={masimo}
          alt="Masimo"
          width={400}
          height={400}
        />
      </div>
      <div className="cols-span-7">
        <p>Company Name</p>
        <p>Excerpt</p>
        <ReadMore
          className=""
          href=""
        >
          Case study
        </ReadMore>
      </div>
    </motion.div>
  );
}
