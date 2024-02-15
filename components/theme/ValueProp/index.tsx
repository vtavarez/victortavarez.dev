'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui';
import { cn } from '@/lib/utils';

export function ValueProp({
	number,
	children,
	className,
}: {
	number?: string;
	children: string;
	className?: string;
}) {
	const [isInView, setIsInView] = useState(false);

	return (
		<motion.div
			className={cn('grid grid-cols-12 gap-4', className)}
			viewport={{ once: true, amount: 0.9 }}
			onViewportEnter={() => setIsInView(true)}
		>
			<div className="col-span-12 pt-28 text-base font-medium leading-loose lg:col-span-1 lg:pt-0">
				{number && '/ ' + number}
			</div>
			<div className="col-span-12 text-responsive-heading font-medium lg:col-span-11">
				{isInView && (
					<Typewriter>
						<p
							className="mx-auto max-w-5xl whitespace-normal pl-2 leading-snug md:pl-6 lg:p-0"
							aria-label={children}
						>
							{children}
						</p>
					</Typewriter>
				)}
			</div>
		</motion.div>
	);
}
