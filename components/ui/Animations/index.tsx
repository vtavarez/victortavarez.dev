'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

const animation = {
	initial: {
		opacity: 0,
		y: 10,
	},
	whileInView: {
		opacity: 1,
		y: 0,
	},
	viewport: {
		once: true,
	},
	transition: {
		type: 'ease',
		duration: 0.5,
		ease: [0.96, 0.085, 0.0, 0.695],
	},
};

export function ScrollingMouse({ className }: Props) {
	return (
		<motion.div
			{...animation}
			className={cn(
				'h-10 w-6 border-2 border-primary lg:rounded-b-xl lg:rounded-t-xl',
				className,
			)}
		>
			<div className="mx-auto mt-2 h-3 w-1 animate-bounce rounded-full bg-primary" />
		</motion.div>
	);
}
