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
		<nav className="translate-y-3 md:translate-y-0" role="navigation">
			<ul className="flex list-none flex-col justify-center text-responsive-menu font-medium">
				{items.map((item, index) => (
					<motion.li
						key={index}
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
				))}
			</ul>
		</nav>
	);
}
