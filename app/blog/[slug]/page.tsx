import { Post } from '@/components/routes/blog';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost } from '@/sanity/lib/client';
import { postSchema } from '@/lib/schema';

type PostProps = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({
	params,
}: PostProps): Promise<Metadata> {
	const response = postSchema.safeParse(await getPost(params.slug));

	return 'error' in response
		? {
				title: '404 Not Found - Victor Tavarez',
				description: 'This post could not be found.',
			}
		: {
				title: response.data.title + ' - Victor Tavarez',
				description: response.data.excerpt,
			};
}

export default async function Page({ params }: PostProps) {
	const response = postSchema.safeParse(await getPost(params.slug));

	return 'error' in response ? (
		(console.error(response.error.issues), notFound())
	) : (
		<Post {...response.data} />
	);
}
