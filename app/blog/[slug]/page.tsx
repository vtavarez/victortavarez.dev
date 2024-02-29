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
	const response = await getPost(params.slug);

	return 'error' in response
		? {
				title: '404 Not Found - Victor Tavarez',
				description: 'This post could not be found.',
			}
		: {
				title: response.title + ' - Victor Tavarez',
				description: response.excerpt,
			};
}

export default async function Page({ params }: PostProps) {
	const response = await getPost(params.slug);

	return 'error' in response ? notFound() : <Post {...response} />;
}
