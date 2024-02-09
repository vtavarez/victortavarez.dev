import { delay, motion, stagger } from 'framer-motion';

const variants = {
  initial: {
    y: '115%',
  },
  animate: (custom: number) => ({
    y: '0%',
    transition: {
      type: 'tween',
      duration: 1.5,
      ease: [0.96, 0.085, 0.0, 0.695],
      delay: custom * 0.1,
    },
  }),
};

export default function Title() {
  return (
    <div
      className="text-responsive-title font-bold uppercase leading-none tracking-tighter text-primary"
      aria-description="Victor Tavarez"
    >
      <div className="mb-3 overflow-hidden xl:mb-4">
        <motion.span
          layout
          className="block leading-[0.75] sm:mb-auto"
          custom={0}
          initial="initial"
          animate="animate"
          variants={variants}
        >
          Victor
        </motion.span>
      </div>
      <div className="overflow-hidden">
        <motion.span
          layout
          className="block leading-[0.75]"
          custom={1}
          initial="initial"
          animate="animate"
          variants={variants}
        >
          Tavarez.
        </motion.span>
      </div>
    </div>
  );
}
