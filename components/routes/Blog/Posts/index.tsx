'use client';
import { useState } from 'react';
import { getPostsChunk } from '@/actions/posts';
import { PostsPagination } from './Pagination';
import { EyebrowText, Post } from '@/components/theme';
import { cn } from '@/lib/utils';
import { type PostType } from '@/lib/types';

type PostsProps = {
	totalPosts: number;
	posts: PostType[];
	className?: string;
};

type PostsChunk = {
	from: number;
	to: number;
	currentChunk: number;
	currentPosts: PostType[];
};

export function Posts({ totalPosts, posts, className }: PostsProps) {
	const [{ from, to, currentChunk, currentPosts }, setChunk] =
		useState<PostsChunk>({
			from: 0,
			to: 8,
			currentChunk: 1,
			currentPosts: posts,
		});

	const totalChunks = Math.ceil(totalPosts / 8);

	async function requestChunk(requestedChunk: number) {
		const response: PostsChunk =
			requestedChunk > currentChunk
				? await getPostsChunk(from + 8, to + 8)
				: await getPostsChunk(from - 8, to - 8);

		'error' in response ? console.error(response.error) : setChunk(response);
	}

	return (
		<div
			className={cn(
				className,
				'min-h-blog-page bg-gradient-to-t from-background from-95% to-transparent xl:pt-24',
			)}
		>
			<EyebrowText cta="Thoughts">Explore</EyebrowText>
			<div className="flex min-h-blog-posts flex-col justify-between">
				<div className="mb-14 mt-8 inline-flex flex-wrap gap-5">
					{currentPosts.map((post, idx) => (
						<Post
							key={post.id}
							number={idx + 1}
							{...post}
						/>
					))}
				</div>
				<div className="mb-8 flex items-center justify-center">
					<PostsPagination
						currentChunk={currentChunk}
						totalChunks={totalChunks}
						requestedChunk={chunk => requestChunk(chunk)}
					/>
				</div>
			</div>
		</div>
	);
}
