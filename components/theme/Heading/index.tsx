'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export function Heading({
  children,
  icon,
  ...props
}: {
  children: React.ReactNode;
  icon?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  const animation = {
    initial: { y: '100%', opacity: 0 },
    animate: { y: '0%', opacity: 1 },
    transition: {
      type: 'tween',
      ease: 'linear',
      duration: 0.4,
    },
  };
  return (
    <div {...props}>
      <motion.h1
        className="flex w-full items-end text-responsive-heading font-medium leading-none text-primary"
        {...animation}
      >
        {children}
        {icon && (
          <ArrowDown
            className="ml-auto"
            size={34}
          />
        )}
      </motion.h1>
    </div>
  );
}
