'use client';
import { motion } from 'framer-motion';

const variants = {
	initial: { opacity: 0, x: 20 },
	animate: (custom: number) => ({
		opacity: 1,
		x: 0,
		transition: { delay: custom * 0.2, duration: 0.5, ease: 'linear' },
	}),
};

export function Project({ number }: { number: number }) {
	return (
		<motion.div
			custom={number}
			initial="initial"
			whileInView="animate"
			variants={variants}
		></motion.div>
	);
}
