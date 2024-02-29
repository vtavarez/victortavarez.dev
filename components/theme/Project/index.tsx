'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, GitFork } from 'lucide-react';
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
			viewport={{ once: true, amount: 0.2 }}
			whileInView="animate"
			variants={variants}
		>
			<Link
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Card className="h-card w-card border-none bg-background">
					<div className="flex h-full flex-col justify-between p-4">
						<div>
							<h2 className="text-lg font-medium">{name}</h2>
							<p className="text-sm">{description}</p>
						</div>
						<div className="mt-4 flex justify-between">
							<div className="flex items-center">
								<Star
									size={16}
									className="mr-2"
								/>
								<span>{stargazerCount}</span>
							</div>
							<div className="flex items-center">
								<GitFork
									size={16}
									className="mr-2"
								/>
								<span>{forkCount}</span>
							</div>
						</div>
					</div>
				</Card>
			</Link>
		</motion.div>
	);
}
