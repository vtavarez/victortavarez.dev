'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion';
import { cn } from '@/lib/utils';

export function HorizontalContent({
  children,
  className,
  lock,
}: {
  children: React.ReactNode;
  className?: string;
  lock?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0px', `-${window ? window.innerWidth : 0}px`],
    {
      ease: easeInOut,
    },
  );

  return (
    <div
      ref={ref}
      className="relative h-[200lvh]"
    >
      <div className="sticky top-0 overflow-hidden">
        <motion.div
          className={cn('flex flex-row', className)}
          style={{ x }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
