'use client';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

type Props = {
	children: React.ReactNode;
	icon?: 'arrow-down' | 'arrow-right';
} & React.HTMLAttributes<HTMLDivElement>;

const animation = {
	initial: { y: '100%', opacity: 0 },
	animate: { y: '0%', opacity: 1 },
	transition: {
		type: 'tween',
		ease: 'linear',
		duration: 0.4,
	},
};

export function Heading({ children, icon, ...props }: Props) {
	return (
		<div {...props}>
			<motion.h1
				className="flex w-full items-end text-responsive-heading font-medium leading-none text-primary"
				{...animation}
			>
				{children}
				{icon === 'arrow-down' && (
					<ArrowDown className="size-heading-icon ml-auto" />
				)}
				{icon === 'arrow-right' && (
					<ArrowRight className="size-heading-icon ml-auto" />
				)}
			</motion.h1>
		</div>
	);
}
