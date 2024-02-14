'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';
import { type PostType } from '@/lib/types';

const variants = {
	initial: { opacity: 0, x: 20 },
	animate: (custom: number) => ({
		opacity: 1,
		x: 0,
		transition: { delay: custom * 0.2, duration: 0.5, ease: 'linear' },
	}),
};

export function Post({
	number,
	title,
	excerpt,
	categories,
	slug,
	timeToRead,
	publishedAt,
}: PostType & { number: number }) {
	return (
		<motion.div
			custom={number}
			initial="initial"
			whileInView="animate"
			variants={variants}
		>
			<Link
				className="group flex h-post-card max-w-post-card flex-col focus:outline-none"
				href={'/blog/' + slug}
			>
				<div>
					<p className="pb-2 text-sm font-medium">/ 00{number}</p>
					<h3 className="underline-animation min-h-[1.8rem] w-fit overflow-hidden text-ellipsis text-pretty text-lg font-medium leading-none">
						{title}
					</h3>
					<p className="mb-3 overflow-hidden text-ellipsis text-pretty text-sm">
						{excerpt}
					</p>
				</div>
				<div className="mb-4 inline-flex gap-2 text-xs leading-none">
					{categories.map(category => (
						<span key={category}>
							{category}
							{categories.length > 1 && ','}
						</span>
					))}
				</div>
				<div className="grid w-fit grid-cols-2 gap-4 pb-2 text-sm leading-none">
					<span>— {formatDate(publishedAt)}</span>
					<span>{timeToRead + ' min read'}</span>
				</div>
			</Link>
		</motion.div>
	);
}
