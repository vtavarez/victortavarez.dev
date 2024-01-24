import { motion } from "framer-motion";

export default function Title() {
  const animation = {
    initial: {
      y: "110%",
    },
    animate: {
      y: "0%",
    },
    transition: {
      type: "tween",
      duration: 1.5,
      ease: [0.96, 0.085, 0.0, 0.695],
    },
  };
  return (
    <h1 className="text-[3.8rem] font-bold uppercase leading-none tracking-tighter text-primary md:text-[4.2rem] xl:text-[12rem]">
      <div className="overflow-y-hidden">
        <motion.span
          layout
          className="mb-4 block sm:mb-auto"
          {...animation}
        >
          Victor
        </motion.span>
      </div>
      <div className="mt-[-0.8rem] overflow-y-hidden">
        <motion.span
          layout
          className="block"
          {...animation}
          transition={{ ...animation.transition, delay: 0.1 }}
        >
          Tavarez.
        </motion.span>
      </div>
    </h1>
  );
}
