"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type RouteAnimationType = {
  children: React.ReactNode;
};

export function RouteAnimation({ children }: RouteAnimationType) {
  const pathname = usePathname();
  const direction = pathname === "/" ? -300 : 300;

  const animation = {
    initial: { x: direction, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.4,
    },
  };

  return (
    <motion.main
      layout
      {...animation}
    >
      {children}
    </motion.main>
  );
}
