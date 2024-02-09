'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';
import { type PostType } from '@/lib/types';
import { custom } from 'zod';

const variants = {
  initial: { opacity: 0, x: 20 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.5, ease: 'linear' },
  }),
};

export function Post({
  number,
  title,
  mainImage: { url, alt },
  excerpt,
  slug,
  timeToRead,
  publishedAt,
}: PostType & { number: number }) {
  return (
    <motion.div
      className="mb-10"
      custom={number}
      initial="initial"
      whileInView="animate"
      variants={variants}
    >
      <Link
        className="group flex h-post-card w-post-card max-w-full flex-col gap-2 focus:outline-none"
        href={'/blog/' + slug}
      >
        <div>
          <p className="pb-2 text-sm font-medium">/00{number}</p>
          <h3 className="underline-animation min-h-[1.8rem] w-fit overflow-hidden text-ellipsis text-pretty text-lg font-medium leading-none">
            {title}
          </h3>
          <p className="h-20 overflow-hidden text-ellipsis text-base">
            {excerpt}
          </p>
        </div>
        <div className="relative h-full w-full">
          <Image
            className="absolute aspect-square h-full w-full object-cover"
            src={url}
            width={600}
            height={600}
            alt={alt}
            priority
          />
        </div>
        <div className="mt-4 grid w-fit grid-cols-2 gap-4 pb-2 text-base leading-none">
          <span>— {formatDate(publishedAt)}</span>
          <span>{timeToRead + ' min read'}</span>
        </div>
      </Link>
    </motion.div>
  );
}
