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
	current: number;
	posts: PostType[];
};

export function Posts({ totalPosts, posts, className }: PostsProps) {
	const [chunk, setChunk] = useState<PostsChunk>({
		from: 0,
		to: 8,
		current: 1,
		posts,
	});

	const total = Math.ceil(totalPosts / 8);

	async function requestChunk(requested: number) {
		const posts: PostsChunk =
			requested > chunk.current
				? await getPostsChunk(chunk.from + 8, chunk.to + 8)
				: await getPostsChunk(chunk.from - 8, chunk.to - 8);

		setChunk(posts);
	}

	return (
		<div
			className={cn(
				className,
				'min-h-blog-page bg-gradient-to-t from-background from-95% to-transparent xl:pt-24',
			)}
		>
			<EyebrowText
				className="pt-16"
				cta="Thoughts"
			>
				Explore
			</EyebrowText>
			<div className="flex min-h-blog-posts flex-col justify-between">
				<div className="mb-14 mt-8 inline-flex flex-wrap gap-5">
					{chunk.posts.map((post, idx) => (
						<Post
							key={post.id}
							number={idx + 1}
							{...post}
						/>
					))}
				</div>
				<div className="mb-8 flex items-center justify-center">
					<PostsPagination
						currentChunk={chunk.current}
						totalChunks={total}
						requestedChunk={chunk => requestChunk(chunk)}
					/>
				</div>
			</div>
		</div>
	);
}
