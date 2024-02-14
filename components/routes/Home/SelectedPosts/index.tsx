import { Post } from '@/components/theme';
import type { PostType } from '@/lib/types';
import { getPosts } from '@/sanity/lib/client';
import { postListSchema } from '@/lib/schema';

export async function SelectedPosts() {
	const posts = postListSchema.safeParse(await getPosts(0, 3, 'desc'));

	return (
		<div className="inline-flex w-full max-w-4xl flex-wrap justify-between">
			{'error' in posts
				? null
				: posts.data.map((post: PostType, _idx: number) => (
						<Post
							key={post.id}
							number={_idx + 1}
							{...post}
						/>
					))}
		</div>
	);
}
