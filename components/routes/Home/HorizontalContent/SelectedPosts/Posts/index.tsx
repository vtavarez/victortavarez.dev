'use client';
import { useState } from 'react';
import { ValueProp, Post } from '@/components/theme';
import { type PostType } from '@/lib/types';

export function Posts({ items }: { items: PostType[] }) {
	const [finishedAnimation, setAnimationFinished] = useState(false);
	return (
		<div className="min-h-[348px] w-full max-w-5xl">
			<ValueProp
				className="mb-4 min-h-12 lg:mb-0"
				onAnimationFinished={() => setAnimationFinished(true)}
			>
				Below is a selection of my writing on topics I had found interesting.
			</ValueProp>
			<div className="inline-flex min-h-[294px] w-full flex-wrap justify-between xl:pt-14">
				{finishedAnimation &&
					items.map((post: PostType, _idx: number) => (
						<Post
							key={post.id}
							number={_idx + 1}
							{...post}
						/>
					))}
			</div>
		</div>
	);
}
