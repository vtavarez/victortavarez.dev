'use server';
import { getPosts } from '@/lib/utils';

export async function getPostsChunk(from: number, to: number) {
	const posts = await getPosts(from, to, 'desc');

	return {
		from: from + 8,
		to: to + 8,
		currentChunk: from / 8 + 1,
		currentPosts: posts,
	};
}
