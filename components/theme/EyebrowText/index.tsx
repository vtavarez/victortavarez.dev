'use client';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function EyebrowText({
	children,
	cta,
	icon,
}: {
	children: React.ReactNode;
	cta?: string;
	icon?: string;
}) {
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
	return (
		<motion.div
			className="flex flex-row justify-between py-24 text-sm lg:py-20 lg:text-base"
			{...animation}
		>
			<div className="font-medium">({children})</div>
			{Boolean(cta) && (
				<div className="flex flex-row gap-1 font-medium">
					{cta}
					{icon === 'arrow-down' && <ArrowDown />}
					{icon === 'arrow-right' && <ArrowRight />}
				</div>
			)}
		</motion.div>
	);
}
