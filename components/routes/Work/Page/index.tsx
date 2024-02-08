import Link from "next/link";
import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "tween", duration: 0.5, ease: "linear" },
};

export function Menu({ items }: { items: string[] }) {
  return (
    <nav>
      <motion.ul className="flex list-none flex-col justify-center gap-4 text-2xl font-medium">
        <li>
          <Link href="">SafetyNet Alert</Link>
        </li>
        <li>
          <Link href="">The Sill</Link>
        </li>
        <li>
          <Link href="">Abby&Finn</Link>
        </li>
        <li>
          <Link href="">Quality Control Solutions</Link>
        </li>
      </motion.ul>
    </nav>
  );
}
