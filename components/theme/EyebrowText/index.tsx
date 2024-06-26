'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

type Props = {
	children: React.ReactNode;
	cta?: string;
	icon?: 'arrow-down' | 'arrow-right';
	className?: string;
};

const animation = {
	initial: {
		opacity: 0,
	},
	whileInView: {
		opacity: 1,
	},
	viewport: {
		once: true,
	},
	transition: {
		type: 'ease',
		duration: 1,
		ease: [0.96, 0.085, 0.0, 0.695],
	},
};

export function EyebrowText({ children, cta, icon, className }: Props) {
	return (
		<motion.div
			className={cn(
				'mt-2 flex flex-row justify-between pb-8 pt-24 text-sm lg:py-20 lg:text-base',
				className,
			)}
			{...animation}
		>
			<div className="font-medium">({children})</div>
			{Boolean(cta) && (
				<div className="flex flex-row gap-1 font-medium">
					{cta}
					{icon === 'arrow-down' && <ArrowDown className="size-eyebrow-icon" />}
					{icon === 'arrow-right' && (
						<ArrowRight className="size-eyebrow-icon" />
					)}
				</div>
			)}
		</motion.div>
	);
}
