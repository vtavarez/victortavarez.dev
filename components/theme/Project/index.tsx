'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';

const variants = {
	initial: { opacity: 0, x: 20 },
	animate: (custom: number) => ({
		opacity: 1,
		x: 0,
		transition: { delay: custom * 0.2, duration: 0.5, ease: 'linear' },
	}),
};

export function Project({
	number,
	name,
	description,
	url,
	stargazerCount,
	forkCount,
}: {
	number: number;
	name: string;
	description: string;
	url: string;
	stargazerCount: number;
	forkCount: number;
}) {
	return (
		<motion.div
			custom={number}
			initial="initial"
			whileInView="animate"
			variants={variants}
		>
			<Link
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			></Link>
			<Card className="h-card w-card rounded-none border-card border-primary bg-background" />
		</motion.div>
	);
}
