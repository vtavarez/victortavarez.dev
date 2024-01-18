import { motion } from "framer-motion";
import { useIsSsr } from "@/lib/hooks";

export default function Title() {
  const isSsr = useIsSsr();
  const animation = {
    initial: {
      y: !isSsr && window.innerWidth > 390 ? 110 : 135,
    },
    animate: {
      y: 0,
    },
    transition: {
      type: "tween",
      duration: 1.5,
      ease: [0.96, 0.085, 0.0, 0.695],
    },
  };
  return (
    <h1 className="text-[3.8rem] font-bold uppercase leading-none tracking-tighter text-primary md:text-[4.2rem] lg:text-[5rem] xl:text-[7rem]">
      <div className="overflow-y-hidden">
        <motion.span
          className="mb-4 block sm:mb-auto"
          {...animation}
        >
          Victor Tavarez
        </motion.span>
      </div>
      <div className="mt-[-0.8rem] overflow-y-hidden">
        <motion.span
          className="block"
          {...animation}
          transition={{ delay: 0.1, ...animation.transition }}
        >
          Software Engineer
        </motion.span>
      </div>
    </h1>
  );
}
