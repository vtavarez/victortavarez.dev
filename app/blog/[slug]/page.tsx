import { Post } from '@/components/routes/blog';
import { notFound } from 'next/navigation';
import { getPost } from '@/lib/utils';
import { type Metadata } from 'next';

type PostProps = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({
	params,
}: PostProps): Promise<Metadata> {
	const post = await getPost(params.slug);

	return 'error' in post
		? {
				title: '404 Not Found - Victor Tavarez',
				description: 'This post could not be found.',
			}
		: {
				title: post.title + ' - Victor Tavarez',
				description: post.excerpt,
			};
}

export default async function Page({ params }: PostProps) {
	const post = await getPost(params.slug);

	return 'error' in post ? notFound() : <Post {...post} />;
}
