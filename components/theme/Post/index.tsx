"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PostType } from "@/lib/types";
import { ReadMore } from "@/components/ui";
import { Author } from "./Author";

export function Post({
  title = "",
  media = "",
  excerpt = "",
  slug = "",
  reading_time = "",
  author: { name, image },
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
    <div className="border-t-2 border-primary py-6 last:border-b-2 sm:py-8 xl:py-16">
      <motion.div
        className="grid grid-cols-12 sm:gap-8 xl:gap-16"
        {...animation}
      >
        <div className="col-span-12 xl:col-span-4">
          <div className="relative h-56 w-full">
            <Image
              className="absolute inset-0 h-full w-full object-cover pb-6 shadow-project sm:pb-0"
              src={media}
              alt={title}
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-5">
          <h3 className="text-balance pb-6 text-2xl font-semibold sm:text-3xl xl:text-4xl">
            {title}
          </h3>
          <p className="text-balance w-3/4 max-w-full pb-8 sm:pb-2">
            {excerpt}
          </p>
          <Author
            className="hidden xl:flex"
            name={name}
            image={image}
          />
        </div>
        <div className="col-span-12 flex flex-row justify-between pb-3 xl:col-span-3">
          <ReadMore
            href={`/blog/${slug}`}
            cta="Read more"
          />
          <Author
            className="row-start-2 xl:hidden"
            name={name}
            image={image}
          />
        </div>
      </motion.div>
    </div>
  );
}
