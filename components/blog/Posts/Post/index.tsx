import Image from "next/image";
import { Author } from "@/components/ui";
import { motion } from "framer-motion";
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
  return (
    <div className="flex h-[460px] w-[460px] max-w-full flex-col gap-6">
      <div>
        <p className="pb-2 text-sm font-medium">/00{number}</p>
        <h3 className="text-pretty h-6 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold leading-none">
          {title}
        </h3>
        <p className="text-sm">{formatDate(publishedAt)}</p>
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
    </div>
  );
}
