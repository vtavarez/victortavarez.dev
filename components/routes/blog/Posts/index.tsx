import { Suspense } from 'react';
import { BouncingLoader } from '@/components/ui';
import { PostsPagination } from './Pagination';
import { EyebrowText, Post } from '@/components/theme';
import { cn } from '@/lib/utils';
import type { PostType } from '@/lib/types';

type Props = {
	totalPages: number;
	posts: PostType[];
	className?: string;
};

export function Posts({ totalPages, posts, className }: Props) {
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
				<div className="mb-14 mt-6 inline-flex flex-wrap gap-5 xl:mt-0">
					{posts.map((post, idx) => (
						<Post
							key={post.id}
							number={idx + 1}
							{...post}
						/>
					))}
				</div>
				<div className="mb-8 flex items-center justify-center">
					<Suspense fallback={<BouncingLoader />}>
						<PostsPagination numberOfPages={totalPages} />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
