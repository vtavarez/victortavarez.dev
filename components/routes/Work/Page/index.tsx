'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, x: 20 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'linear', delay: custom * 0.1 },
  }),
};

export function Menu({ items }: { items: string[] }) {
  return (
    <nav>
      <ul className="flex list-none flex-col justify-center gap-2 text-2xl font-medium">
        <motion.li
          custom={0}
          className="w-fit rounded-md transition-colors hover:bg-primary hover:text-background"
          initial="initial"
          animate="animate"
          variants={variants}
        >
          <Link
            href="#"
            className="block px-3 py-2"
          >
            SafetyNet Alert
          </Link>
        </motion.li>
        <motion.li
          custom={1}
          className="w-fit rounded-md transition-colors hover:bg-primary hover:text-background"
          initial="initial"
          animate="animate"
          variants={variants}
        >
          <Link
            href="#"
            className="block px-3 py-2"
          >
            The Sill
          </Link>
        </motion.li>
        <motion.li
          custom={2}
          className="w-fit rounded-md transition-colors hover:bg-primary hover:text-background"
          initial="initial"
          animate="animate"
          variants={variants}
        >
          <Link
            href="#"
            className="block px-3 py-2"
          >
            Abby&Finn
          </Link>
        </motion.li>
        <motion.li
          custom={3}
          className="w-fit rounded-md transition-colors hover:bg-primary hover:text-background"
          initial="initial"
          animate="animate"
          variants={variants}
        >
          <Link
            href="#"
            className="block px-3 py-2"
          >
            Quality Control Solutions
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
}
