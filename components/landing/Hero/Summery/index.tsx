import { motion } from "framer-motion";

export default function Summery() {
  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 1.5,
      ease: "linear",
      delay: 1,
      type: "spring",
      stiffness: 100,
    },
  };
  return (
    <motion.h2
      className="text-[1.6rem] font-medium leading-snug tracking-tight text-primary md:text-[2rem] xl:my-5 xl:w-1/2 xl:text-[2.5rem]"
      {...animation}
    >
      <span className="relative z-10 inline-block">
        Helping people and businesses bring{" "}
      </span>
      <span className="relative block w-fit before:absolute before:inset-0 before:-right-2 before:-z-10 before:-rotate-1 before:bg-amber-500 before:opacity-75 before:content-[''] dark:text-background">
        dynamic and engaging user
      </span>
      <span className="relative block w-fit before:absolute before:inset-0 before:-right-2 before:-z-10 before:-rotate-1 before:bg-amber-500 before:opacity-75 before:content-[''] dark:text-background">
        experiences to life.
      </span>
    </motion.h2>
  );
}
