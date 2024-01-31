"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PostType } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { ReadMore } from "@/components/ui";
import { Author } from "@/components/ui";

export function Post({
  title,
  publishedAt,
  media,
  excerpt,
  slug,
  readingTime,
  author: { name, image },
  animationDelay = 0,
}: { animationDelay?: number } & PostType) {
  const scaleAnimation = {
    initial: {
      scale: 0,
    },
    whileInView: {
      scale: 1,
    },
    viewport: {
      once: true,
    },
    transition: {
      type: "ease",
      duration: 0.8,
      ease: [0.96, 0.085, 0.0, 0.695],
      delay: animationDelay,
    },
  };

  const opacityAnimation = {
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
      duration: 0.2,
      ease: "linear",
      delay: animationDelay + 0.65,
    },
  };

  return (
    <div className="border-b-2 border-primary py-6 transition-transform duration-200 ease-linear hover:-translate-y-2 sm:py-8 xl:py-10">
      <motion.div
        layout
        {...scaleAnimation}
      >
        <motion.div
          className="grid grid-cols-12 sm:gap-8 xl:gap-16"
          {...opacityAnimation}
        >
          <div className="col-span-12 xl:col-span-4">
            <div className="relative mb-6 h-44 w-full sm:mb-0">
              <Image
                className="absolute inset-0 h-full w-full object-cover object-top"
                src={media}
                alt={title}
                width={400}
                height={300}
                priority
              />
            </div>
          </div>
          <div className="col-span-12 xl:col-span-5">
            <h3 className="text-balance pb-2 text-2xl font-semibold sm:text-3xl">
              {title}
            </h3>
            {/* <Author
              name={name}
              image={image}
            /> */}
            <div className="inline-flex items-center justify-between gap-2 text-sm lg:text-base">
              <p className="text-balance pb-2">{readingTime} min read</p>
              <p className="text-balance pb-2">{formatDate(publishedAt)}</p>
            </div>
            <p className="text-balance max-w-full pb-8 sm:w-3/4 sm:pb-2">
              {excerpt}
            </p>
          </div>
          <div className="col-span-12 flex flex-row justify-between pb-3 xl:col-span-3">
            <ReadMore href={"/blog/" + slug}>Read more</ReadMore>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
