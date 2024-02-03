import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { type PostType } from "@/lib/types";

export function Post({
  number,
  title,
  media,
  excerpt,
  slug,
  publishedAt,
  author,
}: PostType & { number: number }) {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: number * 0.25 }}
    >
      <Link
        className="group flex h-post-card w-post-card max-w-full flex-col gap-4"
        href={"/blog/" + slug}
      >
        <div>
          <p className="pb-2 text-sm font-medium">/00{number}</p>
          <h3 className="underline-animation min-h-[2rem] w-fit overflow-hidden text-ellipsis text-pretty text-lg font-medium leading-none">
            {title}
          </h3>
          <p className="text-base">— {formatDate(publishedAt)}</p>
        </div>
        <div className="relative h-full w-full">
          <Image
            className="absolute aspect-square h-full w-full object-cover"
            src={media}
            width={600}
            height={600}
            alt={excerpt}
            priority
          />
        </div>
      </Link>
    </motion.div>
  );
}
