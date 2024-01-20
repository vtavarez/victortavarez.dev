"use client";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import masimo from "@/public/masimo.png";

export function Project({
  details,
  number,
  client,
  link,
  date,
}: {
  details: string;
  number: number;
  client: string;
  link: string;
  date: string;
}) {
  const animation = {
    initial: {
      y: "100%",
    },
    whileInView: {
      y: "0%",
    },
    viewport: {
      once: true,
      margin: "-20px 0px 0px 0px",
    },
    transition: {
      type: "spring",
      duration: 0.5,
      damping: 10,
      stiffness: 100,
      delay: number * 0.5,
    },
  };

  return (
    <div className="group border-primary pt-4 lg:pt-8">
      <div className="grid grid-cols-12 gap-4 border-b-2 border-primary pb-4 transition-transform duration-200 ease-linear group-hover:-translate-y-2 lg:pb-8">
        <div className="col-span-12 mr-auto grid grid-rows-2 items-center justify-center gap-y-3 lg:col-span-5 lg:gap-y-7">
          <small>{"/00" + (number + 1)}</small>
          <div className="overflow-hidden">
            <motion.p
              className="text-xl font-semibold uppercase leading-none lg:text-2xl"
              {...animation}
            >
              {client}
            </motion.p>
          </div>
        </div>
        <div className="col-span-12 inline-flex gap-4 lg:col-span-4">
          <div className="flex flex-col items-start justify-center">
            <p className="pb-1 text-xs uppercase leading-none lg:pb-0 lg:text-sm">
              {details}
            </p>
            <p className="text-xs uppercase leading-none lg:text-sm">{date}</p>
          </div>
          <div className="ml-auto block lg:hidden">
            <MoveUpRight size={24} />
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <div className="ml-auto hidden lg:block">
            <MoveUpRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
