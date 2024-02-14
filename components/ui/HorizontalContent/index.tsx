'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion';
import { cn } from '@/lib/utils';
import { verify } from '@/actions/recaptcha';

function HorizontalContent({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end end'],
	});

	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'], {
		ease: easeInOut,
	});

	return (
		<section
			ref={ref}
			className="relative h-[200lvh]"
		>
			<div className="sticky top-0 overflow-hidden">
				<motion.section
					layout
					className={cn('flex flex-row', className)}
					style={{ x }}
				>
					{children}
				</motion.section>
			</div>
		</section>
	);
}

function HorizontalContentItem({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section className={cn('relative flex min-w-full flex-col', className)}>
			{children}
		</section>
	);
}

export { HorizontalContent, HorizontalContentItem };
