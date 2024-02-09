import { motion } from 'framer-motion';

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 1.5,
    ease: 'linear',
    delay: 1,
    type: 'spring',
    stiffness: 100,
  },
};

export default function Summery() {
  return (
    <motion.div
      layout
      aria-description="Helping people and businesses bring dynamic and engaging user experiences to life."
      className="text-responsive-subtitle font-medium leading-snug tracking-tight text-primary"
      {...animation}
    >
      <span className="relative z-10">Helping people and businesses</span>
      <span className="relative block w-fit before:absolute before:inset-0 before:-right-2 before:-z-10 before:-rotate-1 before:bg-amber-500 before:opacity-75 before:content-[''] dark:text-background">
        bring dynamic and engaging
      </span>
      <span className="relative block w-fit before:absolute before:inset-0 before:-right-2 before:-z-10 before:-rotate-1 before:bg-amber-500 before:opacity-75 before:content-[''] dark:text-background">
        user experiences to life.
      </span>
    </motion.div>
  );
}
