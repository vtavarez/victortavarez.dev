'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PostType } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { ReadMore } from '@/components/ui';

export function Post({
  title,
  publishedAt,
  mainImage: { url, alt },
  excerpt,
  slug,
  timeToRead,
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
      type: 'ease',
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
      type: 'ease',
      duration: 0.2,
      ease: 'linear',
      delay: animationDelay + 0.65,
    },
  };

  return (
    <div className="border-b-2 border-primary py-6 transition-transform duration-200 ease-linear hover:-translate-y-2 sm:py-8">
      <motion.div
        layout
        {...scaleAnimation}
      >
        <motion.div
          className="grid grid-cols-12 sm:gap-8 xl:gap-16"
          {...opacityAnimation}
        >
          <div className="col-span-12 xl:col-span-4">
            <div className="relative mb-6 aspect-video w-full sm:mb-0 xl:h-56">
              <Image
                className="absolute inset-0 h-full w-full object-cover object-top"
                src={url}
                alt={alt}
                width={800}
                height={800}
                priority
              />
            </div>
          </div>
          <div className="col-span-12 mx-auto flex flex-col justify-center gap-2 sm:max-w-xl xl:col-span-5">
            <p className="text-pretty text-2xl font-medium md:text-2xl">
              {title}
            </p>
            <p className="max-w-full text-balance pb-2">{excerpt}</p>
            <div className="inline-flex items-center gap-3 text-sm">
              <p className="text-balance pb-2">— {formatDate(publishedAt)}</p>
              <p className="text-balance pb-2">{timeToRead} min read</p>
            </div>
          </div>
          <div className="col-span-12 flex flex-row justify-between pb-3 xl:col-span-3 xl:pt-4">
            <ReadMore href={'/blog/' + slug}>Read more</ReadMore>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
