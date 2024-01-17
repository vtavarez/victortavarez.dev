"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Post as PostType } from "@/lib/types";

export function Post({
  title = "",
  media = "",
  excerpt = "",
  reading_time = "",
  author = "",
}: PostType) {
  const animation = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
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
    <div className="border-t-2 border-primary py-4 last:border-b-2 md:py-16">
      <motion.div
        className="grid grid-cols-12 md:gap-16"
        {...animation}
      >
        <div className="col-span-12 md:col-span-4">
          <div className="relative h-56 w-full">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={media}
              alt={title}
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <h3 className="pb-6 text-2xl font-semibold md:text-5xl">{title}</h3>
          <p className="text-pretty pb-6">{excerpt}</p>
          <p className="text-end text-sm text-gray-600">{author}</p>
        </div>
        <div className="col-span-12 md:col-span-3">
          <Link
            href={`/blog/${title}`}
            className="ml-auto flex w-fit flex-row gap-2 border-2 border-primary px-8 py-4 text-lg text-primary shadow-project"
          >
            Read More <ArrowUpRight size={24} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
