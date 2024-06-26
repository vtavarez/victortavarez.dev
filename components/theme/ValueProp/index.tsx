'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui';
import { cn } from '@/lib/utils';

export function ValueProp({
	number,
	children,
	className,
	onAnimationFinished,
}: {
	number?: string;
	children: string;
	className?: string;
	onAnimationFinished?: () => void;
}) {
	const [isInView, setIsInView] = useState(false);

	return (
		<motion.div
			className={cn('grid grid-cols-12 gap-4 overflow-hidden', className)}
			viewport={{ once: true, amount: 0.9 }}
			onViewportEnter={() => setIsInView(true)}
		>
			{number && (
				<div className="col-span-12 pt-28 text-base font-medium leading-loose lg:col-span-1 lg:pt-0">
					{'/ ' + number}
				</div>
			)}
			<div
				className={cn(
					'col-span-12 text-responsive-heading font-medium',
					number ? 'lg:col-span-11' : 'lg:col-span-12',
				)}
			>
				{isInView && (
					<Typewriter onFinished={onAnimationFinished}>
						<p
							className="mx-auto w-full max-w-5xl whitespace-normal leading-snug"
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
