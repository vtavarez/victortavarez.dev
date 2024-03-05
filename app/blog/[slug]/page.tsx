import { Content } from '@/components/theme';
import { notFound } from 'next/navigation';
import { getPost } from '@/lib/utils';
import { type Metadata } from 'next';

type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function Page({ params }: Props) {
	const post = await getPost(params.slug);

	return 'error' in post ? notFound() : <Content {...post} />;
}
