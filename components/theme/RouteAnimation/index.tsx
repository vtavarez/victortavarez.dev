"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RouteAnimationType = {
  children: React.ReactNode;
};

export function RouteAnimation({
  children,
  className,
}: RouteAnimationType & React.HTMLAttributes<HTMLDivElement>) {
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
      className={cn(className, "")}
      {...animation}
    >
      {children}
    </motion.main>
  );
}
