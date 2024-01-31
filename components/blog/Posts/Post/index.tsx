"use client";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { type PostType } from "@/lib/types";

export function Post({
  number,
  title,
  media,
  excerpt,
  publishedAt,
  author,
}: PostType & { number: number }) {
  const animation = {
    animate: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        type: "tween",
        ease: "linear",
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      className="h-post-card w-post-card mb-10 flex max-w-full flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: number * 0.15 }}
    >
      <div>
        <p className="pb-2 text-sm font-medium">/00{number}</p>
        <h3 className="text-pretty min-h-[2rem] w-fit overflow-hidden text-ellipsis text-lg font-medium leading-none">
          {title}
        </h3>
        <p className="text-base">— {formatDate(publishedAt)}</p>
      </div>
      <div className="relative h-full w-full">
        <Image
          className="absolute h-full w-full object-cover"
          src={media}
          width={600}
          height={600}
          alt={excerpt}
          priority
        />
      </div>
    </motion.div>
  );
}
