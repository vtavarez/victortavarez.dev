'use client';
import { Fragment, useState, useEffect } from 'react';
import type { PostType } from '@/lib/types';
import { ValueProp, Post } from '@/components/theme';

export function Posts({ items }: { items: PostType[] }) {
	const [finishedAnimation, setFinishedAnimation] = useState(false);
	return (
		<Fragment>
			<ValueProp
				className="min-h-12"
				onAnimationFinished={() => setFinishedAnimation(true)}
			>
				Below is a selection of my writing on topics I found interesting.
			</ValueProp>
			<div className="inline-flex min-h-[294px] w-full max-w-4xl flex-wrap justify-between xl:pt-12">
				{finishedAnimation &&
					items.map((post: PostType, _idx: number) => (
						<Post
							key={post.id}
							number={_idx + 1}
							{...post}
						/>
					))}
			</div>
		</Fragment>
	);
}
